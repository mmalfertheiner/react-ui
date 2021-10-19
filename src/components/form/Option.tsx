import React from 'react'
import classnames from 'classnames'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'

type OptionProps = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
> &
  ModeProps

export const Option: React.FC<OptionProps> = ({
  mode = Mode.light,
  className,
  children,
  ...props
}) => {
  const { form } = useTheme()

  return (
    <option
      className={classnames(
        form.option.base,
        form.option[mode].normal,
        className
      )}
      {...props}
    >
      {children}
    </option>
  )
}
