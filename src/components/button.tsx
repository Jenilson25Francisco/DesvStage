import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  text?: string
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-5 h-12 flex justify-between items-center bg-gray-500 text-blue font-semibold rounded-xl cursor-pointer w-full hover:bg-blue transition-colors hover:text-gray-900"
      {...props}
    >
      {children}
    </button>
  )
}
