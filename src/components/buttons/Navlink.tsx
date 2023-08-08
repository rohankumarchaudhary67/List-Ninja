import { VariantProps, cva } from "class-variance-authority";
import { cn } from '@/lib/utils/utils'
import { AnchorHTMLAttributes, HtmlHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

const navlinkVariants = cva(
    'py-2 px-4',
    {
        variants: {
            variant: {
                default: "text-black hover:text-[#FD7014] rounded-md px-3 py-2 text-sm font-medium",
                darkLink: "text-white hover:text-[#FD7014] rounded-md px-3 py-2 text-sm font-medium",
                profileLink: "block px-4 py-2 text-sm text-gray-700"
            },
            size: {
                default: "text-sm"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

// Interface here
interface NavlinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof navlinkVariants> {
    href: string;
}

// eslint-disable-next-line react/display-name
const Navlink = forwardRef<HTMLAnchorElement, NavlinkProps>(
    ({ className, size, variant, href, ...props }, ref) => {
        return (
            <Link href={href} ref={ref} className={cn(navlinkVariants({ variant, size, className }))} {...props} />
        )
    }
)

export default Navlink;