import { cn } from '@/lib/utils'

interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  description?: string
  className?: string
}

export function Toggle({
  checked = false,
  onChange,
  label,
  description,
  className
}: ToggleProps) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div>
        {label && (
          <div className="font-mono text-sm mb-1">{label}</div>
        )}
        {description && (
          <div className="font-mono text-sm text-gray-600">
            {description}
          </div>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className={cn(
          'w-11 h-6',
          'bg-black/20',
          'peer-focus:outline-none',
          'rounded-full peer',
          'peer-checked:after:translate-x-full',
          'after:content-[\'\']',
          'after:absolute',
          'after:top-[2px]',
          'after:left-[2px]',
          'after:bg-white',
          'after:rounded-full',
          'after:h-5 after:w-5',
          'after:transition-all',
          'peer-checked:bg-black'
        )}></div>
      </label>
    </div>
  )
} 