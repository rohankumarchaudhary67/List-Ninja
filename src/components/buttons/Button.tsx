import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";


const buttonVariants = cva(
    'py-2 px-4 rounded-lg bg-blue text-white',
    {
        variants: {
            variant: {
                default: "inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                greenBorderd: "relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300",
                dark: 'relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group'
            },
            size: {
                default: 'py-2 px-4',
                small: 'py-3 px-6',
                medium: 'py-4 px-8 text-xl',
                large: 'py-4 px-8 text-2xl',
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, ...props }, ref) => {
        return (
            <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
        )
    }
)

export { Button, buttonVariants };