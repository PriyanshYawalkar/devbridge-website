import React from "react";

const sizes = {
    headingxs: "text-[20px] font-bold",
    headings: "text-[24px] font-bold md:text-[22px]",
    headingmd: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
    headinglg: "text-[46px] font-bold md:text-[42px] sm:text-[36px]",
    headingxl: "text-[128px] font-bold md:text-[48px]",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "headingmd",
    as,
    ...resProps
}) => {
    const Components = as || "h6";

    return (
        <Components className={`text-white-a700_e5 font-googlesansdisplay ${sizes[size]} ${className}`} {...resProps}>
            {children}
        </Components>
    );
};

export { Heading };