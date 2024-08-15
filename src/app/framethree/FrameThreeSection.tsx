import { Img } from "../components";
import React from "react";

export default function FrameThreeSection() {
    return (
        <>
            {/* Frame Three Section */}
            /* added some new components */
            <div className="flex flex-col gap-[52px] self-stretch sm:gap-[26px]">
                <div className="mx-5 md:mx-0">
                    <div className="flex item-center md:flex-col">
                        <div className="flex flex-1 flex-col items-center gap-3.5 px-14 md:self-stretch md:px-5">
                            <div className="ml-2 5 flex w-[86%] items-center justify-center md:ml-0 md:w-full md:flex-col">
                                <div className="relative h-[184px] flex-1 content-center md:h-auto md:w-full md:flex-none md:self-stretch">
                                    <div className="h-[174px] w-[74%] rounded-[92px] border-2 border-solid border-black-900_01">
                                        <Img 
                                            src="img_copy_of_copy_of.png"
                                            width={184}
                                            height={184}
                                            alt="Team member"
                                            className="absolute bottom-0 left-0 top-0 my-auto h-[184px] w-[184px] rounded-[86px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}