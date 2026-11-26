import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from './utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'yellow' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-preto disabled:opacity-50 disabled:pointer-events-none'

    const variants = {
      primary:
        'bg-vermelho text-branco hover:bg-[#b81725] focus-visible:ring-vermelho',
      yellow:
        'bg-yellow-duck text-preto hover:bg-[#e0b013] focus-visible:ring-yellow-duck',
      ghost:
        'text-white/80 hover:text-white hover:bg-white/5 focus-visible:ring-white/30',
      outline:
        'border border-white/15 text-branco hover:border-white/30 hover:bg-white/5 focus-visible:ring-yellow-duck',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base',
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button }
