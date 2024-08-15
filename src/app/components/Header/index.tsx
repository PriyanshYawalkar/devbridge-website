import { Heading, Img } from "./..";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

export default function Header({ ...props }: Props) {
    return (
        <header>
            <Img
                src="img_header_logo.png"
                width={198}
                height={184}
                alt="Headerlogo"
                className="h-[184px] w-[198px] object-contain"    
            />
            <ul className="flex flex-wrap gap-[26px]">
                <li>
                    <Link href="#" className="cursor-pointer">
                        <Heading as="h2" className="!text-[32.07px] !text-gray-900 hover:!text-green-900 hover:underline">
                            Home
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                        <Heading as="h2" className="!text-[32.07px] !text-gray-900 hover:!text-green-900 hover:underline">
                            About
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                        <Heading as="h2" className="!text-[32.07px] !text-gray-900 hover:!text-green-900 hover:underline">
                            Team
                        </Heading>
                    </Link>
                </li>
                <li>
                    <Link href="#" className="cursor-pointer">
                        <Heading as="h2" className="!text-[32.07px] !text-gray-900 hover:!text-green-900 hover:underline">
                            Connect
                        </Heading>
                    </Link>
                </li>
            </ul>
        </header>
    );
}