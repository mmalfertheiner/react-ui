import classNames from 'classnames'
import { ReactElement } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { getCustomErrorCss, getCustomLabelCss } from './useCustomInputCss'

export type ToggleSwitchProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  ModeProps & {
    name: string
    label?: string
    layout?: ToggleSwitchLayout
    size?: ToggleSwitchSize
    height?: ToggleSwitchHeight
  }

export enum ToggleSwitchLayout {
  start = 'start',
  end = 'end',
  spaceBetween = 'spaceBetween',
}

export enum ToggleSwitchHeight {
  compact = 'compact',
  inputHeight = 'inputHeight',
}

export enum ToggleSwitchSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export function ToggleSwitch({
  name,
  label,
  layout = ToggleSwitchLayout.start,
  size = ToggleSwitchSize.md,
  height = ToggleSwitchHeight.compact,
  disabled = false,
  mode = Mode.light,
  className,
  ...props
}: ToggleSwitchProps): ReactElement {
  const {
    form: { toggleSwitch, inputLabel, inputError },
  } = useTheme()
  const { register } = useFormContext()
  const field = register(name)
  const checked = useWatch({ name })

  const customLabelCss = getCustomLabelCss(inputLabel, {
    mode,
    disabled,
  })

  const customErrorCss = getCustomErrorCss(inputError, { mode })
  const errorCssWithoutMarginLeft = getClassNameWithoutMarginLeft(
    inputError.base
  )

  const checkedState = checked ? 'checked' : 'unchecked'
  const disabledState = disabled ? 'disabled' : 'normal'

  return (
    <div className={className}>
      <label
        className={classNames(
          toggleSwitch.base,
          toggleSwitch.layout[layout],
          toggleSwitch.height[height],
          toggleSwitch[disabledState]
        )}
      >
        {label && (
          <span className={classNames(toggleSwitch.label.base, customLabelCss)}>
            {label}
          </span>
        )}
        <input
          type="checkbox"
          {...props}
          {...field}
          disabled={disabled}
          className={toggleSwitch.input.base}
        />
        <span
          className={classNames(
            toggleSwitch.switch.base,
            toggleSwitch.switch.sizeHeight[size][height],
            toggleSwitch.switch[disabledState],
            toggleSwitch.switch.modeState[mode][disabledState].base,
            toggleSwitch.switch.modeState[mode][disabledState][checkedState]
          )}
        >
          <span
            className={classNames(
              toggleSwitch.handle.base,
              toggleSwitch.handle.size[size].base,
              toggleSwitch.handle.size[size][checkedState],
              toggleSwitch.handle[disabledState],
              toggleSwitch.handle.modeState[mode][disabledState][checkedState]
            )}
          ></span>
        </span>
      </label>
      <InputError
        name={name}
        className={classNames(errorCssWithoutMarginLeft, customErrorCss)}
      />
    </div>
  )
}
