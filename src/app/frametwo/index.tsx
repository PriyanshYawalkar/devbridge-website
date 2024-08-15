import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import React from "react";

export default function FrameTwoPage() {
    return (
        <div className="flex w-full flex-col items-center gap-[38px] bg-white-a700_e5 py-5">
            <div className="container-xs md:px-5">
                <Header />
            </div>

            {/* about us section */}
            <AboutUsSection />
        </div>
    );
}