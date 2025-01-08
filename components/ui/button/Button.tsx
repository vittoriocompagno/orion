import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center font-mono text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white/70 backdrop-blur-lg text-gray-900 hover:bg-white/80 border border-black/5 shadow-lg shadow-black/[0.03]",
        black: "bg-black text-white hover:bg-white hover:text-black border border-black transition-colors group relative overflow-hidden",
        ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-black/[0.02]",
        outline: "border-2 border-black bg-transparent hover:bg-black hover:text-white transition-colors",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3",
        icon: "h-10 w-10",
      },
      shape: {
        default: "rounded-full",
        square: "rounded-none",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 