"use client"
import React from "react"

const shapes = {
    round: "rounded-[20px]",
} as const;

const variants = {
    outline: {
        black_900_01: "border border-black-900-01 border-2 border-solid text-black-900-01",
    },
} as const;

const sizes = {
    xs: "h-[72px] px-2 text-[15px]"
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
    Partial<{
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
        shape: keyof typeof shapes;
        variant: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: string;
    }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "outline",
            size = "xs",
            color = "black_900_01",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={'${className} flex items-center justify-center self-stretch cursor-text text-black-900_7f text-[15px] font-bold border-black-900_01 border-2 border-solid rounded-[20px] ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}'}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    {...restProps}
                />
                {!!suffix && suffix}
            </label>
        );
    },
);

export { Input };