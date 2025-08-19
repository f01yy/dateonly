import type { ButtonHTMLAttributes } from 'react'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  return <button {...otherProps}>{children}</button>
}
