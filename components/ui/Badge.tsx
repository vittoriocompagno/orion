import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center font-mono text-xs px-2.5 py-0.5 rounded-full transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-black text-white hover:bg-black/90',
        secondary:
          'bg-black/[0.02] text-gray-900 hover:bg-black/[0.05] border border-black/5',
        success:
          'bg-green-500/10 text-green-700 hover:bg-green-500/20 border border-green-500/20',
        warning:
          'bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20 border border-yellow-500/20',
        danger:
          'bg-red-500/10 text-red-700 hover:bg-red-500/20 border border-red-500/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants } 