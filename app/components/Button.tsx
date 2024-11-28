import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-medium', {
    variants: {
        variant: {
            primary: 'px-4 py-2 border-2 text-white border-[#A221AF] rounded-full hover:bg-purple-50 hover:text-black transition-colors',
            secondary: 'border-white text-black bg-transparent'
        },
        size: {
            sm: 'h-10',
        }
    }
})

export default function Button(
    props: { 
        variant: "primary" | "secondary"; 
        text: string; 
        size?: 'sm'  
    } & ButtonHTMLAttributes<HTMLButtonElement>) {
    const { variant, text, className, size, ...otherpPops } = props;

    return (
        <button 
            className={classes({ variant, className, size })} 
            {...otherpPops}
        >
            {text}
        </button>
    )
};