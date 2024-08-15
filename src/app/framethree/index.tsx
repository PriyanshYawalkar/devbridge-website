import Header from "../components/Header";
import FrameThreeSection from "./FrameThreeSection";
import React from "react";

export default function FrameThreePage() {
    return (
        <div className="flex w-full flex-col item-center gap-[52px] bg-white-a700_e5 sm:gap-[26px]">
            <div className="container-xs mt-[18px] md:px-5">
                <Header />
            </div>

            {/* frame three section */}
            <FrameThreeSection />
        </div>
    );
}