import React from "react";

// This replicates the REFFRENCE/src/Footer/Footer.jsx structure using Tailwind classes
// and assets served from /public. It is self-contained so deleting REFFRENCE won't break.

export default function ReferenceFooterSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-16 border-b border-black/10">
      <div className="max-w-[1312px] mx-auto">
        {/* Container matches 1312x823 with 20px radius */}
        <div className="relative bg-black rounded-[20px] overflow-hidden w-full h-[720px] md:h-[760px]">
          {/* Top hero area (459px) with bg image and left-to-right gradient */}
          <div className="relative h-[459px] w-full">
            <img
              src="/frame-301.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Industrial interior"
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
            {/* Text content */}
            <div className="absolute inset-0 p-[60px] flex flex-col gap-5 items-start justify-start">
              <h3 className="text-white font-urbanist font-normal leading-tight text-[40px] md:text-[48px] max-w-[741px]">
                Creating a Greener Tomorrow,
                <br className="hidden md:block" /> Together
              </h3>
              <p className="text-white/80 font-urbanist text-[20px] max-w-[741px]">
                Driving change through afforestation, waste management, and sustainability education for a better planet.
              </p>
              <button className="relative inline-flex items-center bg-[#BEFF6B] rounded-full pl-4 pr-1 h-[39px] group">
                <span className="text-black font-urbanist text-[16px]">Get Involved</span>
                <img
                  src="/solar-arrow-up-outline0.svg"
                  alt="arrow"
                  className="ml-2 w-[31px] h-[31px] rounded-full transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </div>
          </div>

          {/* Bottom content area */}
          <div className="px-[60px] pt-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              {/* Left column */}
              <div className="w-full md:w-auto flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/one-step-greener-transparent-1-1-10.png"
                    alt="One Step Greener"
                    className="h-[65px] object-cover"
                  />
                  <span className="text-white/60 text-[20px] tracking-[-0.03em] hidden md:inline-block">
                    One Step Greener
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src="/envelope0.svg" alt="email" className="w-6 h-6" />
                    <span className="text-white/70 text-[16px] font-urbanist">info@onestepgreener.org</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/phone0.svg" alt="phone" className="w-6 h-6" />
                    <span className="text-white/70 text-[16px] font-urbanist">+91-8744901010</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70">
                    <img src="/insta-logo0.svg" alt="instagram" className="w-6 h-6" />
                    <img src="/x-logo0.svg" alt="x" className="w-[21px] h-[22px]" />
                    <img src="/yt-logo0.svg" alt="youtube" className="w-[31px] h-[21px]" />
                    <img src="/linkedin-logo0.svg" alt="linkedin" className="w-[22px] h-[22px]" />
                    <img src="/fb-logo0.svg" alt="facebook" className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Link columns */}
              <div className="w-full md:w-[418px] flex justify-between text-white/60 text-[16px] font-urbanist">
                <ul className="flex flex-col gap-3">
                  <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Our Team</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Awards & Honours</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Projects</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Knowledge Hub</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Education</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Accessibility</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 text-center text-white/70 text-[12px] tracking-wide font-urbanist">
              2019 © COPYRIGHT, ONESTEPGREENER. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}