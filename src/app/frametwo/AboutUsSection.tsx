import { img, Heading } from "../../components";
import React from "react";

export default function AboutUsSection() {
    return (
        <>
            {/* about us section */}
            <div className="mb-1 flex items-start self-stretch px-5 md:flex-col">
                <div className="flex flex-1 items-start justify-center gap-12 self-center px-14 md:flex-col md:self-stretch md:px-5">
                    <img 
                        src="img_group.svg"
                        width={332}
                        height={426} 
                        alt="image Group"
                        className="h-[426px] w-[32%] self-center object-contain md:w-full" 
                    />
                    <Heading
                        size="headings"
                        as="h1"
                        className="mt-[74px] w-[64%] text-justify leading-[120%] !text-blue_gray-900 md:w-full"
                        >
                            Devbridge is a community of developers, designers, and creators who come toogther to learn, collaborate, and innovate. We believe in the power of community and the impact it can have on the world. Join us and be a part of something bigger than yourself. We host a vareity of events, workshops, and hackathons to help you grow and connect with other like-minded individuals. We are always looking for new members to join our community and help us make a difference in the world.
                        </Heading>
                </div>
                <img 
                    src="img_group_2.svg"
                    width={40}
                    height={246} 
                    alt="Image Group"
                    className="mt-[74px] h-[246px] w-[3%] object-contain md:w-full" 
                />
            </div>
        </>
    );
}