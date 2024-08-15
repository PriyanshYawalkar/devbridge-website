import { Heading, Img } from "../../components";
import React from "react";

export default function ConnectingSection() {
    return (
        <>
            {/* connecting section */}
            <div className="flex justify-center px-[38px] sm:px-5">
                <div className="flex w-[94%] flex-col items-start gap-[84px] md:w-full md:gap-[63px] sm:gap-[42px]">
                    <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                        <Heading size="headingxl" as="h1" className="w-[66%] leading-[120%] !text-white-a700_01 md:w-full">
                            <>
                                Connecting
                                <br />
                                Geeks
                            </>
                        </Heading>
                        <Img
                            src="img_group_1.svg"
                            alt="Group Image"
                            width={50}
                            height={302}
                            className="h-[238px] w-[238px] object-contain md:w-full"
                        />
                    </div>
                    <Heading size="headingxs" as="h2" className="!text-[20.25px] !text-white-a700_01">
                    Intrested in sponsoring or partnering with us?
                </Heading>
            </div>
        </div >
        </>
    );
}