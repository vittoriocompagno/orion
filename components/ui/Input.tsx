import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-mono text-sm text-gray-600 mb-2">
            {label}
          </label>
        )}
        <input
          className={cn(
            'w-full px-4 py-2 font-mono text-sm',
            'bg-white/80 backdrop-blur-xl',
            'border border-black/5',
            'rounded-full',
            'focus:outline-none focus:ring-2 focus:ring-black/5',
            'hover:bg-white/90 transition-colors',
            'placeholder:text-gray-400',
            error && 'border-red-500/50 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 font-mono text-xs text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input } 