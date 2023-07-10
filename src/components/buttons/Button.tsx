import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";


const buttonVariants = cva(
    'py-2 px-4 rounded-lg bg-blue text-white',
    {
        variants: {
            variant:{
                default: 'bg-grey text-black',
                dark: 'bg-black text-white'
            },
            size:{
                default: 'py-2 px-4',
                lg: 'py-3 px-6'
            }
        },
        defaultVariants:{
            variant:'default',
            size: 'default'
        }
    }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props}) => {
    return <button className={cn(buttonVariants({variant, size, className}))} {...props}/>
}

export {Button, buttonVariants};