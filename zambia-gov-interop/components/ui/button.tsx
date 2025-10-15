import React from 'react'
import clsx from 'clsx'

export function Button({ children, className, variant = 'primary', ...props } : any) {
  const base = 'btn'
  const style = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  return (
    <button className={clsx(base, style, className)} {...props}>
      {children}
    </button>
  )
}
export default Button
