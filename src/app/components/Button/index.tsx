import React from "react";

const shapes = {
    round: "rounded-[18px]",
} as const;
const variants = {
    fill: {
        blue_gray_100_51: "bg-blue-gray-100_51 text-black-900_01",
    },
} as const;
const sizes = {
    xs: "h-[38px] px-[34px] text-[15px]",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "onclick"
> &
    Partial<{
        className: string;
        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;
        onClick: () => void;
        shape: keyof typeof shapes;
        variants: keyof typeof variants | null;
        size: keyof typeof sizes;
        color: string;
    }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "blue_gray_100_51",
    ...restProps
}) => {
    return (
        <button
            className={'${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-black-900_01 text-[15px] font-bold border-black-900_01 border-2 border-solid bg-blue_gray-100_51 min-w-[110px] rounded-[18px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]'} {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

export { Button };