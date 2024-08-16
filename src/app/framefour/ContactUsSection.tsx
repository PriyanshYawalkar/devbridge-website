"use client";

import  { Img, Button, TextArea, Input, Heading } from "../components";
import React from "react";

export default function ContactUsSection() {
    return (
        <>
            {/* Contact Us Section */}
            <div className="self-stretch px-5">
                <div className="flex items-start gap-2 md:flex-col">
                    <div className="relative h-[570px] flex-1 content-center self-center md:h-auto md:w-full md:flex-none md:self-stretch">
                        <Heading 
                            size="headinglg"
                            as="h1"
                            className="absolute left-[10%] top-0 m-auto !text-[46.42px] !text-gray-900_02"    
                        >
                            Want to join? Write us here,
                            </Heading>
                            <div className="ml-[118px] flex w-[42%] flex-col items-end gap-3.5 md:ml-0">
                                <Input shape="round" type="text" name="Name Field" placeholder={'Your Full Name'} />
                                <Input shape="round" type="email" name="Email Field" placeholder={'Your Email Address'} />
                                <TextArea 
                                    shape="round"
                                    name="Message Area"
                                    placeholder={'Type your message here'}
                                    className="self-stretch !border-black-900_01 font-bold text-black-900-7f"
                                />
                                <Button shape="round">PUSH</Button>
                            </div>
                            <div className="absolute bottom-[-1.74px] left-0 right-0 m-auto flex flex-1 flex-col items-end">
                                <Img 
                                    src="img_fresh_folk_teamwork.png"
                                    width={400}
                                    height={374}
                                    alt="Teamwork Image"
                                    className="realtive z-[1] mr-[72px] h-[374px] w-[36%] object-contain md:mr-0"
                                />
                                <Img 
                                    src="img_group_gray_900.svg"
                                    width={496}
                                    height={316}
                                    alt="Decorative Image"
                                    className="realtive mt-[-150px] h-[316px] w-[42%] object-contain"
                                />
                            </div>
                    </div>
                    <Img 
                        src="img_fresh_folk_teamwork.png"
                        width={400}
                        height={374}
                        alt="Header Image"
                        className="mt-14 h-[246px] w-[3%] object-contain md:w-full"
                    />
                </div>
            </div>
        </>
    );
}