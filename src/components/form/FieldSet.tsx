import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { get, useFormState } from 'react-hook-form'
import { useTheme } from '../../framework'
import { ClassNameProps, Mode, ModeProps } from '../types'
import { getCustomLabelCss } from './useCustomInputCss'

export enum FieldSetIndent {
  none = 'none',
  all = 'all',
  label = 'label',
}

export type FieldSetProps = ClassNameProps &
  ModeProps & {
    label?: ReactNode
    disabled?: boolean
    indent?: FieldSetIndent
    fields?: string[]
    children?: ReactNode
  }

export function FieldSet({
  label,
  mode = Mode.light,
  disabled = false,
  indent = FieldSetIndent.none,
  fields = [],
  className,
  children,
}: FieldSetProps): ReactElement {
  const { form } = useTheme()
  const { errors } = useFormState({ name: fields })

  const hasError = fields.some((name) => !!get(errors, name))

  const customLabelCss = getCustomLabelCss(form.inputLabel, {
    mode,
    disabled,
    hasError,
  })

  const labelCssWithoutMarginLeft = form.inputLabel.base.replace(
    /(^|\s)ml-\w+(?=\s|$)/,
    ''
  )

  return (
    <fieldset
      className={classNames(
        // eslint-disable-next-line
        // @ts-ignore
        form.fieldSet.container.indent[indent],
        className
      )}
    >
      <legend
        className={classNames(
          labelCssWithoutMarginLeft,
          customLabelCss,
          // eslint-disable-next-line
          // @ts-ignore
          form.fieldSet.label.indent[indent]
        )}
      >
        {label}
      </legend>
      {children}
    </fieldset>
  )
}
