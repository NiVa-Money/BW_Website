import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;

    return (
        <div 
            className={
                twMerge("inline-flex border border-black gap-2 text-[#387D8C] rounded-full px-3 py-1 uppercase items-center", 
                className)
            } 
            {...otherProps}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
};