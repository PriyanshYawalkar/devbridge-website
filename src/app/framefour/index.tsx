import Header from "../components/Header";
import ContactUsSection from "./ContactUsSection";
import React from "react";

export default function FrameFourPage() {
    return (
        <div className="flex w-full flex-col items-center gap-[54px] bg-white-a700_e5 sm:gap-[27px]">
            <div className="container-xs mt-5 md:px-5">
                <Header />
            </div>
                
                {/* Contact Us Section */}
                <ContactUsSection />
        </div>
    );
}