import { Heading, Img } from "../../components";
import ConnectingSection from "./ConnectingSection";
import Link from "next/link";
import React from "react";

export default function FrameOnePage() {
    return (
        <div className="flex w-full">
            <div className="mx-auto flex w-full max-w-7xl bggray-900 md:px5">
                <div className="mb-[110px] flex w-full flex-col gap-[42px]">
                    <div className="ml-[26px] mr-20 flex items-start md:mx-0 md:flex-col">
                        <img 
                            src="img_untitled_design.png" 
                            alt=""
                            width={238}
                            height={238}
                            className="h-[238] w-[238px] self-center object-cover md:w-full" 
                        />
                        <header className="mt-[76px] flex flex-1flex-wrap items-center justify-end md:self-strech">
                            <Link href="#">
                                <Heading as="h2" className="!text-[32.07px] underline">
                                    Home
                                </Heading>
                            </Link>
                            <Link href="#">
                                <Heading as="h2" className="!text-[32.07px] underline">
                                    About
                                </Heading>
                            </Link>
                            <Link href="#">
                                <Heading as="h2" className="!text-[32.07px] underline">
                                    Team
                                </Heading>
                            </Link>
                            <Link href="#">
                                <Heading as="h2" className="!text-[32.07px] underline">
                                    Connect
                                </Heading>
                            </Link>
                        </header>
                    </div>

                    {/* connecting section */}
                    <ConnectingSection />
                </div>
            </div>
        </div>
    );
}