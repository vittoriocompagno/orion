import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  label?: string
  error?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, value, onChange, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block font-mono text-sm text-gray-600 mb-2">
            {label}
          </label>
        )}
        <select
          className={cn(
            'w-full px-4 py-2 font-mono text-sm',
            'bg-white/80 backdrop-blur-xl',
            'border border-black/5',
            'rounded-full',
            'focus:outline-none focus:ring-2 focus:ring-black/5',
            'hover:bg-white/90 transition-colors',
            'appearance-none',
            'bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E")]',
            'bg-[length:1.25rem]',
            'bg-[right_0.75rem_center]',
            'bg-no-repeat',
            error && 'border-red-500/50 focus:ring-red-500/20',
            className
          )}
          ref={ref}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 font-mono text-xs text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select } 