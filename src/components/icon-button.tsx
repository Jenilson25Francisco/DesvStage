import type { ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  text?: string
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer hover:bg-blue transition-colors hover:text-gray-900"
      {...props}
    >
      {children}
    </button>
  )
}
