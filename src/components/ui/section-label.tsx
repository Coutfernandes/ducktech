import { cn } from './utils'

interface SectionLabelProps {
  children: React.ReactNode
  variant?: 'yellow' | 'neutral'
  className?: string
}

export function SectionLabel({ children, variant = 'yellow', className }: SectionLabelProps) {
  return (
    <span className={cn('eyebrow', variant === 'neutral' && 'eyebrow-neutral', className)}>
      <span
        className={cn(
          'inline-block h-1.5 w-1.5 rounded-full',
          variant === 'yellow' ? 'bg-yellow-duck' : 'bg-oliva',
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
