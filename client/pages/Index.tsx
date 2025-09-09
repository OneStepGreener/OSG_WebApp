import { useEffect, useRef, useState } from "react";
import ReferenceFooterSection from "@/components/ReferenceFooterSection";

function TestimonialsSlider() {
  // Simple auto-slide logic using translateX on a track
  const intervalMs = 3000; // 3s
  const [index, setIndex] = useState(0);
  const cardsPerView = 4; // desktop reference; layout remains responsive

  const testimonials = [
    {
      quote:
        "We started waste segregation in our apartment with OSG’s help — it’s now part of our daily habit!",
      name: "Anjali Mehta",
      org: "Welfare Association, Gurugram",
      avatar: "/frame-701.png",
    },
    {
      quote:
        "OSG’s awareness drive transformed how our society handles recycling and dry waste pickups.",
      name: "Rahul Verma",
      org: "Resident Welfare Society, Delhi",
      avatar: "/frame-701.png",
    },
    {
      quote:
        "Tree plantation with OSG brought our community together — a greener colony feels possible.",
      name: "Priya Sharma",
      org: "Eco Club, Noida",
      avatar: "/frame-701.png",
    },
    {
      quote:
        "Segregation at source finally clicked for us. Clear, simple, and effective guidance by OSG.",
      name: "Kunal Kapoor",
      org: "Housing Society, Faridabad",
      avatar: "/frame-701.png",
    },
    {
      quote:
        "The pickups are so convenient — we’ve drastically reduced landfill waste as a society.",
      name: "Meera Iyer",
      org: "RWA, Gurgaon",
      avatar: "/frame-701.png",
    },
  ];

  // For continuous loop effect, duplicate the list
  const loopList = [...testimonials, ...testimonials];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, testimonials.length]);

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${(index * 100) / cardsPerView}%)` }}
      >
        {loopList.map((t, i) => (
          <div
            key={i}
            className="min-w-[80%] sm:min-w-[48%] md:min-w-[32%] lg:min-w-[24%] bg-white rounded-2xl border border-black/10 p-5 md:p-6 shadow-sm"
          >
            <p className="text-sm md:text-base text-black font-urbanist opacity-80 mb-5">“{t.quote}”</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={`${t.name} avatar`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-black font-urbanist">{t.name}</span>
                <span className="text-xs text-black/60 font-urbanist">{t.org}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  // Smoothly scroll to the About section
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Generating_a_River_Video_3.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 md:from-black/40 to-transparent">
          <div className="flex h-full w-full px-4 py-20 md:px-16 lg:px-16 xl:px-16 justify-start items-center">
            {/* Hero Content */}
            <div className="flex flex-col items-start gap-6 max-w-[529px] relative">
              {/* Main Headline */}
              <h1 className="text-white font-urbanist text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
                Reimagining Waste, Restoring the Planet
              </h1>

              {/* Content Section */}
              <div className="flex flex-col items-start gap-5 max-w-[514px]">
                {/* Subtitle */}
                <p className="text-white font-urbanist text-lg sm:text-xl font-medium leading-normal opacity-80">
                  Empowering communities through recycling, sustainability, and green initiatives — one step at a time.
                </p>

                {/* CTA Button */}
                <div className="relative">
                  {/* Button Shadow/Base */}
                  <div className="absolute top-1 left-0 w-[155px] h-10 rounded-full bg-black/20 shadow-[0_4px_0_rgba(255,255,255,0.5)_inset,_0_-5px_5.4px_rgba(0,0,0,0.2)_inset]"></div>

                  {/* Main Button */}
                  <button
                    onClick={scrollToAbout}
                    className="relative -top-0.5 inline-flex items-center bg-[#BEFF6B] rounded-full pl-4 pr-1 h-[39px] group"
                    aria-label="Get involved and learn more"
                  >
                    <span className="text-black font-urbanist text-base font-medium">Get Involved</span>

                    {/* Arrow Icon */}
                    <img src="/solar-arrow-up-outline0.svg" alt="arrow" className="ml-2 w-[31px] h-[31px] rounded-full transition-transform duration-300 group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - matches uploaded design */}
      <section id="about" className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Tag */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-200 rounded-full">
              <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <span className="text-black font-urbanist text-sm font-normal uppercase opacity-80">01</span>
              </div>
              <span className="text-black font-urbanist text-sm font-normal uppercase pr-2">ABOUT US</span>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col items-start gap-16 lg:gap-24 max-w-6xl">
            {/* Headline */}
            <h2 className="text-[#000] font-urbanist text-[60px] font-medium leading-[1.1] w-[987px]">
              Empowering Change Through Green Action, One Step at a Time
            </h2>

            {/* Stats and Description Layout */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 w-full">
              {/* Left: Statistics */}
              <div className="flex flex-col sm:flex-row gap-12 lg:gap-20">
                {/* Stat 1 */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-end gap-0">
                    <span className="text-black font-inter text-5xl sm:text-6xl lg:text-7xl font-normal leading-none">45</span>
                    <span className="text-black font-urbanist text-4xl sm:text-5xl lg:text-6xl font-normal leading-none mb-1">+</span>
                  </div>
                  <p className="text-black font-urbanist text-base font-normal leading-normal opacity-70 max-w-[200px]">
                    Active in 80+ communities across India
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-end gap-0">
                    <span className="text-black font-inter text-5xl sm:text-6xl lg:text-7xl font-normal leading-none">157</span>
                    <span className="text-black font-urbanist text-4xl sm:text-5xl lg:text-6xl font-normal leading-none mb-1">k+</span>
                  </div>
                  <p className="text-black font-urbanist text-base font-normal leading-normal opacity-70 max-w-[250px]">
                    people mobilized through clean-ups, workshops & campaigns
                  </p>
                </div>
              </div>

              {/* Right: Description and CTA */}
              <div className="flex flex-col gap-9 max-w-[533px] lg:justify-center">
                <p className="text-black font-urbanist text-lg sm:text-xl font-normal leading-normal opacity-70">
                  OneStepGreener (OSG) is a dynamic social initiative focused on waste management, recycling, and tree plantation in India's National Capital Region. Launched by young pioneers Vihaan and Nav Agarwal in 2018, we aim to facilitate a zero-waste future and foster employment for informal workers, thus ensuring their security and dignity.
                </p>

                {/* Read More Button */}
                <button className="flex items-center gap-2 px-4 py-3 bg-white border border-black/5 rounded-full shadow-[0_-4px_5.4px_0_rgba(0,0,0,0.08)_inset] hover:shadow-lg transition-shadow w-fit" aria-label="Read more about us">
                  <span className="text-black font-urbanist text-base font-medium">Read more</span>
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      aria-hidden
                    >
                      <rect width="31" height="31" rx="15.5" fill="black" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.6761 9.63817C20.858 9.63829 21.0324 9.71058 21.161 9.83917C21.2895 9.96777 21.3618 10.1421 21.362 10.324L21.362 18.0882C21.3652 18.1803 21.3499 18.2721 21.3169 18.3582C21.2839 18.4442 21.2339 18.5227 21.1699 18.589C21.1059 18.6553 21.0292 18.7081 20.9443 18.7441C20.8595 18.7801 20.7683 18.7987 20.6761 18.7987C20.584 18.7987 20.4927 18.7801 20.4079 18.7441C20.3231 18.7081 20.2464 18.6553 20.1824 18.589C20.1184 18.5227 20.0684 18.4442 20.0354 18.3582C20.0024 18.2721 19.987 18.1803 19.9903 18.0882L19.9903 11.9804L10.8091 21.1615C10.6804 21.2902 10.5059 21.3625 10.3239 21.3625C10.1419 21.3625 9.96731 21.2902 9.83861 21.1615C9.70991 21.0328 9.63761 20.8583 9.63761 20.6763C9.63761 20.4942 9.70991 20.3197 9.83861 20.191L19.0198 11.0098L12.9119 11.0098C12.8198 11.0131 12.728 10.9978 12.642 10.9648C12.5559 10.9318 12.4774 10.8818 12.4111 10.8178C12.3448 10.7537 12.2921 10.677 12.256 10.5922C12.22 10.5074 12.2015 10.4162 12.2015 10.324C12.2015 10.2318 12.22 10.1406 12.256 10.0558C12.2921 9.97097 12.3448 9.89427 12.4111 9.83026C12.4774 9.76626 12.5559 9.71626 12.642 9.68326C12.728 9.65025 12.8198 9.63492 12.9119 9.63817L20.6761 9.63817Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - replicated from Spark Studio */}
      <section id="what-we-do" className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-16">
        <div className="flex flex-col items-center gap-6 md:gap-10">
          {/* Section Badge */}
          <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#DEDEDE]">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <span className="text-sm font-normal text-black opacity-80 font-urbanist uppercase">02</span>
            </div>
            <span className="text-sm font-normal text-black font-urbanist uppercase">WHAT WE DO</span>
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-start gap-8 md:gap-16 max-w-[1312px] w-full">
            {/* Hero Text Section */}
            <div className="flex flex-col justify-center items-center gap-4 md:gap-6 w-full">
              <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-black text-center font-urbanist max-w-[790px] leading-tight px-4">
                  Driving Everyday Action for a Greener Tomorrow
                </h2>
                <p className="text-base md:text-lg lg:text-xl font-normal text-black text-center font-urbanist opacity-70 w-full max-w-4xl px-4">
                  From household waste segregation to large-scale tree plantations, we turn climate concern into climate action — led by youth, powered by community.
                </p>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full items-stretch gap-6 lg:gap-7">
              {/* Segregation at Source Card */}
              <div
                className="group flex flex-col justify-end items-center gap-3 h-full p-4 md:p-6 pb-6 md:pb-10 rounded-2xl relative overflow-hidden min-h-[462px] bg-[#F1F2F6]"
                data-prehover
              >
                <img
                  src="/frame-370.png"
                  alt="Segregation at Source visual"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 scale-100 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
                {/* Dark overlay for readability on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-100 transition-opacity duration-300 ease-out group-hover:opacity-100" aria-hidden="true"></div>
                {/* Keep content visible; only change colors on hover */}
                <div className="relative z-10 flex flex-col justify-end items-start gap-3 md:gap-4 w-full text-white transition-colors duration-300 ease-out">
                  {/* Trash Icon */}
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                      <rect width="56" height="56" rx="28" fill="white"/>
                      <path d="M31.7076 15.1865C32.0064 15.1865 32.2931 15.3053 32.5045 15.5166C32.7158 15.7279 32.8345 16.0147 32.8345 16.3135V18.7939C32.8345 18.8491 32.879 18.8944 32.9342 18.8945H37.2691C37.5679 18.8946 37.8547 19.0133 38.066 19.2246C38.2771 19.4359 38.3961 19.7228 38.3961 20.0215C38.396 20.3202 38.2772 20.6071 38.066 20.8184C37.8547 21.0296 37.5679 21.1484 37.2691 21.1484H18.731C18.4323 21.1484 18.1454 21.0296 17.9342 20.8184C17.7229 20.6071 17.6042 20.3202 17.6041 20.0215C17.6041 19.7227 17.723 19.4359 17.9342 19.2246C18.1455 19.0133 18.4322 18.8946 18.731 18.8945H23.066C23.121 18.8943 23.1656 18.849 23.1656 18.7939V16.3135C23.1656 16.0147 23.2844 15.7279 23.4957 15.5166C23.707 15.3053 23.9937 15.1865 24.2925 15.1865H31.7076Z" fill="#007926" stroke="#007926" strokeWidth="0.4" strokeLinejoin="round"/>
                      <path d="M37.102 25.0233L34.618 39.8534C34.579 40.0662 34.4669 40.2586 34.301 40.3974C34.1351 40.5362 33.9259 40.6127 33.7096 40.6135H22.2904C22.0741 40.6127 21.8649 40.5362 21.699 40.3974C21.5331 40.2586 21.421 40.0662 21.382 39.8534L18.898 25.0233C18.8766 24.8913 18.884 24.7562 18.9197 24.6274C18.9554 24.4985 19.0186 24.3789 19.1049 24.2768C19.1912 24.1746 19.2986 24.0924 19.4196 24.0356C19.5407 23.9789 19.6726 23.949 19.8063 23.9481H36.1751C36.3104 23.9463 36.4444 23.9742 36.5677 24.0298C36.6911 24.0853 36.8008 24.1672 36.8891 24.2697C36.9774 24.3721 37.0423 24.4927 37.079 24.6229C37.1158 24.7531 37.1237 24.8897 37.102 25.0233Z" fill="#007926" stroke="#007926" strokeWidth="3" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium text-black group-hover:text-white transition-colors font-urbanist w-full text-white">
                      Segregation at Source
                    </h3>
                    <p className="text-sm md:text-base font-normal text-black group-hover:text-white/90 font-urbanist opacity-100 group-hover:opacity-100 w-full h-10 md:h-[50px] overflow-hidden text-ellipsis transition-colors text-white/90">
                      Segregating waste is the first and most crucial step in responsible waste management. We help you understand what goes where, how to do it right, and make it easy to get started.
                    </p>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-1 bg-black rounded-full shadow-inner">
                    <span className="text-sm md:text-base font-medium text-white font-urbanist">Read more</span>
                    <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full">
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                        <rect x="0.666504" width="31" height="31" rx="15.5" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.3426 9.63817C21.5245 9.63829 21.6989 9.71058 21.8275 9.83917C21.9561 9.96777 22.0283 10.1421 22.0285 10.324L22.0285 18.0882C22.0317 18.1803 22.0164 18.2721 21.9834 18.3582C21.9504 18.4442 21.9004 18.5227 21.8364 18.589C21.7724 18.6553 21.6957 18.7081 21.6108 18.7441C21.526 18.7801 21.4348 18.7987 21.3426 18.7987C21.2505 18.7987 21.1592 18.7801 21.0744 18.7441C20.9896 18.7081 20.9129 18.6553 20.8489 18.589C20.7849 18.5227 20.7349 18.4442 20.7019 18.3582C20.6689 18.2721 20.6535 18.1803 20.6568 18.0882L20.6568 11.9804L11.4756 21.1615C11.3469 21.2902 11.1724 21.3625 10.9904 21.3625C10.8084 21.3625 10.6338 21.2902 10.5051 21.1615C10.3764 21.0328 10.3041 20.8583 10.3041 20.6763C10.3041 20.4942 10.3764 20.3197 10.5051 20.191L19.6863 11.0098L13.5784 11.0098C13.4863 11.0131 13.3945 10.9978 13.3085 10.9648C13.2224 10.9318 13.1439 10.8818 13.0776 10.8178C13.0113 10.7537 12.9586 10.677 12.9225 10.5922C12.8865 10.5074 12.868 10.4162 12.868 10.324C12.868 10.2318 12.8865 10.1406 12.9225 10.0558C12.9586 9.97097 13.0113 9.89427 13.0776 9.83026C13.1439 9.76626 13.2224 9.71626 13.3085 9.68326C13.3945 9.65025 13.4863 9.63492 13.5784 9.63817L21.3426 9.63817Z" fill="black"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              {/* Recyclable Waste Pickups Card */}
              <div className="group flex flex-col justify-end items-center gap-3 h-full p-4 md:p-6 pb-6 md:pb-10 rounded-2xl min-h-[462px] bg-[#F1F2F6] relative overflow-hidden">
                <img
                  src="/frame-380.png"
                  alt="Recyclable Waste Pickups visual"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
                {/* Dark overlay for readability on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" aria-hidden="true"></div>
                {/* Keep content visible; only change colors on hover */}
                <div className="relative z-10 w-full transition-colors duration-300 ease-out">
                <div className="flex flex-col justify-end items-start gap-3 md:gap-4 w-full">
                  {/* Recycling Icon */}
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full">
                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                      <rect x="0.666504" width="56" height="56" rx="28" fill="white"/>
                      <path d="M25.1783 28.2882C25.3361 28.9717 24.5863 29.4911 24.0031 29.1265L22.014 27.8836L19.5303 31.8583C18.8816 32.8961 19.6313 34.25 20.8546 34.25H23.3931C23.7166 34.25 23.979 34.5123 23.979 34.8359V36.789C23.979 37.1126 23.7166 37.375 23.3931 37.375H20.8596C17.1812 37.375 14.9367 33.3199 16.8846 30.2031L19.3661 26.2291L17.3776 24.9865C16.7877 24.618 16.9398 23.7189 17.6159 23.5628L22.9985 22.3201C23.419 22.2231 23.8384 22.4852 23.9355 22.9056L25.1783 28.2882ZM29.9908 19.3569L32.0069 22.5832L30.0176 23.8262C29.4292 24.1938 29.5782 25.0935 30.2559 25.25L35.6385 26.4926C36.062 26.5902 36.4791 26.3248 36.5755 25.9072L37.8182 20.5245C37.9743 19.8486 37.2327 19.3175 36.643 19.6862L34.6563 20.9277L32.6415 17.701C30.8094 14.7697 26.5278 14.763 24.6915 17.701L23.8144 19.1056C23.643 19.38 23.7265 19.7414 24.0009 19.9129L25.6571 20.9478C25.9315 21.1193 26.2931 21.0358 26.4645 20.7614L27.3415 19.3579C27.9622 18.3647 29.391 18.3972 29.9908 19.3569ZM40.4481 30.2031L39.1046 28.0515C38.9332 27.777 38.5716 27.6934 38.2971 27.8649L36.6437 28.8981C36.3693 29.0696 36.2858 29.4311 36.4573 29.7055L37.8032 31.8594C38.4505 32.8951 37.7028 34.25 36.4782 34.25H31.7915V31.9072C31.7915 31.2132 30.9496 30.8631 30.4579 31.3548L26.5516 35.2601C26.2465 35.5652 26.2465 36.0599 26.5516 36.365L30.4579 40.2707C30.9462 40.7592 31.7915 40.417 31.7915 39.7182V37.375H36.4731C40.1486 37.375 42.3977 33.3224 40.4481 30.2031Z" fill="black"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium text-black group-hover:text-white transition-colors font-urbanist w-full">
                      Recyclable Waste Pickups
                    </h3>
                    <p className="text-sm md:text-base font-normal text-black group-hover:text-white/90 font-urbanist opacity-80 group-hover:opacity-100 w-full h-10 md:h-[50px] overflow-hidden text-ellipsis transition-colors">
                      Segregation means little without proper disposal. We offer free door-to-door dry waste pickups in NCR and dedicated drop-off points to ensure your waste is recycled the right way.
                    </p>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-1 bg-black rounded-full shadow-inner">
                    <span className="text-sm md:text-base font-medium text-white font-urbanist">Read more</span>
                    <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full">
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                        <rect x="0.666504" width="31" height="31" rx="15.5" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.3426 9.63817C21.5245 9.63829 21.6989 9.71058 21.8275 9.83917C21.9561 9.96777 22.0283 10.1421 22.0285 10.324L22.0285 18.0882C22.0317 18.1803 22.0164 18.2721 21.9834 18.3582C21.9504 18.4442 21.9004 18.5227 21.8364 18.589C21.7724 18.6553 21.6957 18.7081 21.6108 18.7441C21.526 18.7801 21.4348 18.7987 21.3426 18.7987C21.2505 18.7987 21.1592 18.7801 21.0744 18.7441C20.9896 18.7081 20.9129 18.6553 20.8489 18.589C20.7849 18.5227 20.7349 18.4442 20.7019 18.3582C20.6689 18.2721 20.6535 18.1803 20.6568 18.0882L20.6568 11.9804L11.4756 21.1615C11.3469 21.2902 11.1724 21.3625 10.9904 21.3625C10.8084 21.3625 10.6338 21.2902 10.5051 21.1615C10.3764 21.0328 10.3041 20.8583 10.3041 20.6763C10.3041 20.4942 10.3764 20.3197 10.5051 20.191L19.6863 11.0098L13.5784 11.0098C13.4863 11.0131 13.3945 10.9978 13.3085 10.9648C13.2224 10.9318 13.1439 10.8818 13.0776 10.8178C13.0113 10.7537 12.9586 10.677 12.9225 10.5922C12.8865 10.5074 12.868 10.4162 12.868 10.324C12.868 10.2318 12.8865 10.1406 12.9225 10.0558C12.9586 9.97097 13.0113 9.89427 13.0776 9.83026C13.1439 9.76626 13.2224 9.71626 13.3085 9.68326C13.3945 9.65025 13.4863 9.63492 13.5784 9.63817L21.3426 9.63817Z" fill="black"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

              {/* Tree Plantations Card */}
              <div className="group flex flex-col justify-end items-center gap-3 h-full p-4 md:p-6 pb-6 md:pb-10 rounded-2xl min-h-[462px] bg-[#F1F2F6] relative overflow-hidden">
                <img
                  src="/frame-410.png"
                  alt="Tree Plantations visual"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
                {/* Dark overlay for readability on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" aria-hidden="true"></div>
                {/* Keep content visible; only change colors on hover */}
                <div className="relative z-10 w-full transition-colors duration-300 ease-out">
                <div className="flex flex-col justify-end items-start gap-3 md:gap-4 w-full">
                  {/* Tree/Cloud Icon */}
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full">
                    <svg width="57" height="56" viewBox="0 0 57 56" fill="none" className="w-12 h-12 md:w-14 md:h-14">
                      <rect x="0.333374" width="56" height="56" rx="28" fill="white"/>
                      <path d="M28.3334 30.5L31.4584 27.375M28.3334 28.625L24.5834 24.875M28.3334 40.5V24.25M21.4865 21.75C21.8021 18.2456 24.7471 15.5 28.3334 15.5C31.9196 15.5 34.8646 18.2456 35.1803 21.75H35.2084C36.7002 21.75 38.131 22.3426 39.1858 23.3975C40.2407 24.4524 40.8334 25.8832 40.8334 27.375C40.8334 28.8668 40.2407 30.2976 39.1858 31.3525C38.131 32.4074 36.7002 33 35.2084 33H21.4584C19.9665 33 18.5358 32.4074 17.4809 31.3525C16.426 30.2976 15.8334 28.8668 15.8334 27.375C15.8334 25.8832 16.426 24.4524 17.4809 23.3975C18.5358 22.3426 19.9665 21.75 21.4584 21.75H21.4865Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                    <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium text-black group-hover:text-white transition-colors font-urbanist w-full">
                      Tree Plantations
                    </h3>
                    <p className="text-sm md:text-base font-normal text-black group-hover:text-white/90 font-urbanist opacity-80 group-hover:opacity-100 w-full h-10 md:h-[50px] overflow-hidden text-ellipsis transition-colors">
                      We organize tree plantations to make cities greener and cleaner. Whether it's gifting a tree, learning about native species, or joining a plantation drive — every step counts.
                    </p>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-1 bg-black rounded-full shadow-inner">
                    <span className="text-sm md:text-base font-medium text-white font-urbanist">Read more</span>
                    <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white rounded-full">
                      <svg width="32" height="31" viewBox="0 0 32 31" fill="none" className="w-6 h-6 md:w-8 md:h-8">
                        <rect x="0.333374" width="31" height="31" rx="15.5" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.3426 9.63817C21.5245 9.63829 21.6989 9.71058 21.8275 9.83917C21.9561 9.96777 22.0283 10.1421 22.0285 10.324L22.0285 18.0882C22.0317 18.1803 22.0164 18.2721 21.9834 18.3582C21.9504 18.4442 21.9004 18.5227 21.8364 18.589C21.7724 18.6553 21.6957 18.7081 21.6108 18.7441C21.526 18.7801 21.4348 18.7987 21.3426 18.7987C21.2505 18.7987 21.1592 18.7801 21.0744 18.7441C20.9896 18.7081 20.9129 18.6553 20.8489 18.589C20.7849 18.5227 20.7349 18.4442 20.7019 18.3582C20.6689 18.2721 20.6535 18.1803 20.6568 18.0882L20.6568 11.9804L11.4756 21.1615C11.3469 21.2902 11.1724 21.3625 10.9904 21.3625C10.8084 21.3625 10.6338 21.2902 10.5051 21.1615C10.3764 21.0328 10.3041 20.8583 10.3041 20.6763C10.3041 20.4942 10.3764 20.3197 10.5051 20.191L19.6863 11.0098L13.5784 11.0098C13.4863 11.0131 13.3945 10.9978 13.3085 10.9648C13.2224 10.9318 13.1439 10.8818 13.0776 10.8178C13.0113 10.7537 12.9586 10.677 12.9225 10.5922C12.8865 10.5074 12.868 10.4162 12.868 10.324C12.868 10.2318 12.8865 10.1406 12.9225 10.0558C12.9586 9.97097 13.0113 9.89427 13.0776 9.83026C13.1439 9.76626 13.2224 9.71626 13.3085 9.68326C13.3945 9.65025 13.4863 9.63492 13.5784 9.63817L21.3426 9.63817Z" fill="black"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Our Impact Section */}
      <section id="our-impact" className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-16">
        <div className="flex flex-col items-center gap-6 md:gap-10 max-w-[1312px] mx-auto w-full">
          {/* Section Badge */}
          <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#DEDEDE]">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <span className="text-sm font-normal text-black opacity-80 font-urbanist uppercase">03</span>
            </div>
            <span className="text-sm font-normal text-black font-urbanist uppercase">OUR IMPACT</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-3 px-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-black font-urbanist leading-tight max-w-5xl">
              Empowering Communities, One
              <br className="hidden md:block" />
              Green Step at a Time
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-black/70 font-urbanist max-w-3xl">
              From waste management to tree planting, our collective efforts are driving real,
              measurable change. Here’s what we’ve achieved so far
            </p>
          </div>

          {/* Impact Stats with Center Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center w-full">
            {/* Left Stats */}
            <div className="flex flex-col gap-10 order-2 lg:order-1">
              <div className="text-left md:text-right">
                <p className="text-sm text-black/60 font-urbanist">Homes Powered by Saved Electricity</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,45,455</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-black/60 font-urbanist">Oxygen Generated</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,45,45,455 lbs</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-black/60 font-urbanist">Households Involved</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,455+</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-black/60 font-urbanist">Carbon Sequestered</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,45,455 lbs</p>
              </div>
            </div>

            {/* Center Image with radial ticks */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden">
                {/* Decorative radial ticks */}
                <div className="absolute inset-0" aria-hidden>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute left-1/2 top-0 w-px h-4 bg-black/20 origin-bottom"
                      style={{
                        transform: `translateX(-50%) rotate(${(360 / 20) * i}deg) translateY(-10px)`,
                      }}
                    />
                  ))}
                </div>
                <img
                  src="/frame-500.png"
                  alt="Hand nurturing a small plant"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col gap-10 order-3">
              <div>
                <p className="text-sm text-black/60 font-urbanist">Total Waste Recycled</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,45,455 kg</p>
              </div>
              <div>
                <p className="text-sm text-black/60 font-urbanist">Trees Planted/Saved</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">45,455</p>
              </div>
              <div>
                <p className="text-sm text-black/60 font-urbanist">Water Saved</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">4,45,45,455 L</p>
              </div>
              <div>
                <p className="text-sm text-black/60 font-urbanist">Landfill Space Prevented</p>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-urbanist mt-1">4,455 m³</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-16 md:py-20 lg:py-24 px-4 md:px-16">
        <div className="max-w-[1312px] mx-auto w-full flex flex-col items-center gap-6 md:gap-10">
          {/* Section Badge */}
          <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#DEDEDE]">
            <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <span className="text-sm font-normal text-black opacity-80 font-urbanist uppercase">04</span>
            </div>
            <span className="text-sm font-normal text-black font-urbanist uppercase">TESTIMONIALS</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-black font-urbanist leading-tight">
              Voices of Change from Our
              <br className="hidden md:block" />
              Community
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-black/70 font-urbanist max-w-3xl">
              Real stories from people who've experienced the power of small steps leading to big
              impact.
            </p>
          </div>

          {/* Auto-sliding Cards */}
          <TestimonialsSlider />
        </div>
      </section>

      {/* Reference-derived Section (ported from REFFRENCE) */}
      <section id="reference-derived">
        <ReferenceFooterSection />
      </section>

    </main>
  );
}
