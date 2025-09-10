import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  // Navigate to home and scroll to a section smoothly
  const goToSection = useCallback(
    (id: string) => {
      const doScroll = () => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      if (location.pathname !== "/OSG") {
        navigate("/OSG", { state: { scrollTo: id } });
      } else {
        doScroll();
      }
    },
    [location.pathname, navigate],
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <nav className="mt-4 w-[97%] max-w-7xl pointer-events-auto px-2">
        <div className="flex items-center justify-between gap-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-2 shadow-lg">
          {/* Left: Brand */}
          <Link to="/OSG" className="flex items-center gap-2 shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86cb4012ac1e4e02a3bfc6301ba5077e%2Fe2699d97daab4f39b15f745802e9ca8a?format=webp&width=64"
              alt="One Step Greener logo"
              className="h-7 w-7 object-contain"
            />
            <span className="text-white font-urbanist text-sm sm:text-base truncate max-w-[140px] sm:max-w-none">One Step Greener</span>
          </Link>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-2 text-white/90 font-urbanist text-sm" aria-label="Primary navigation">
            {/* About -> 01 About Us (home section) */}
            <button
              onClick={() => goToSection("about")}
              className={`px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95`}
            >
              About Us
            </button>

            {/* Waste -> 02 What We Do (home section) */}
            <button
              onClick={() => goToSection("what-we-do")}
              className={`px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95`}
            >
              Waste
            </button>

            {/* What We Do -> 02 What We Do (home section) */}
            <button
              onClick={() => goToSection("what-we-do")}
              className={`px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95`}
            >
              What We Do
            </button>

            {/* Our Impact -> 03 Our Impact (home section) */}
            <button
              onClick={() => goToSection("our-impact")}
              className={`px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95`}
            >
              Our Impact
            </button>

            {/* Knowledge Hub -> Coming Soon modal */}
            <button
              onClick={() => setComingSoonOpen(true)}
              className={`px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95`}
            >
              Knowledge Hub
            </button>

            {/* For Business (unchanged - external) */}
            <a
              href="https://reactapp.tcil.in/Business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full transition-all duration-200 bg-[#BEFF6B] text-black hover:brightness-95 active:scale-95 inline-flex items-center gap-2"
            >
              For Business
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white">
                <svg width="12" height="12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.011 11.1927C24.2222 11.1929 24.4247 11.2768 24.574 11.4262C24.7233 11.5755 24.8073 11.778 24.8074 11.9892L24.8074 21.0057C24.8112 21.1126 24.7934 21.2192 24.7551 21.3192C24.7168 21.4191 24.6587 21.5103 24.5844 21.5873C24.51 21.6643 24.421 21.7255 24.3224 21.7673C24.2239 21.8092 24.118 21.8307 24.011 21.8307C23.904 21.8307 23.798 21.8092 23.6995 21.7673C23.601 21.7255 23.5119 21.6643 23.4376 21.5873C23.3633 21.5103 23.3052 21.4191 23.2669 21.3192C23.2286 21.2192 23.2107 21.1126 23.2145 21.0057L23.2145 13.9127L12.5525 24.5747C12.4031 24.7241 12.2004 24.8081 11.989 24.8081C11.7777 24.8081 11.5749 24.7241 11.4255 24.5747C11.276 24.4252 11.1921 24.2225 11.1921 24.0111C11.1921 23.7998 11.276 23.5971 11.4255 23.4476L22.0875 12.7856L14.9945 12.7856C14.8875 12.7894 14.7809 12.7716 14.681 12.7333C14.5811 12.695 14.4899 12.6369 14.4129 12.5626C14.3359 12.4882 14.2747 12.3992 14.2328 12.3007C14.191 12.2021 14.1694 12.0962 14.1694 11.9892C14.1694 11.8822 14.191 11.7762 14.2328 11.6777C14.2747 11.5792 14.3359 11.4901 14.4129 11.4158C14.4899 11.3415 14.5811 11.2834 14.681 11.2451C14.7809 11.2068 14.8875 11.189 14.9945 11.1927L24.011 11.1927Z" fill="white"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: CTA / Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Mobile hamburger (shown < md) */}
            <details className="md:hidden relative">
              <summary className="list-none inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer select-none">
                <span className="sr-only">Open menu</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 min-w-[220px] rounded-xl bg-black/90 backdrop-blur-md border border-white/10 p-2 flex flex-col text-sm text-white/90">
                <button onClick={() => goToSection("about")} className={`text-left px-3 py-2 rounded-lg hover:bg-white/10`}>About Us</button>
                <button onClick={() => goToSection("what-we-do")} className={`text-left px-3 py-2 rounded-lg hover:bg-white/10`}>Waste</button>
                <button onClick={() => goToSection("what-we-do")} className={`text-left px-3 py-2 rounded-lg hover:bg-white/10`}>What We Do</button>
                <button onClick={() => goToSection("our-impact")} className={`text-left px-3 py-2 rounded-lg hover:bg-white/10`}>Our Impact</button>
                <button onClick={() => setComingSoonOpen(true)} className={`text-left px-3 py-2 rounded-lg hover:bg-white/10`}>Knowledge Hub</button>
                <a href="https://reactapp.tcil.in/Business" target="_blank" rel="noopener noreferrer" className="text-left px-3 py-2 rounded-lg hover:bg-white/10">For Business</a>
                <button onClick={() => setComingSoonOpen(true)} className="mt-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#BEFF6B] text-black hover:brightness-95">Get Involved</button>
              </div>
            </details>

            {/* CTA (Get Involved) -> Coming Soon */}
            <button onClick={() => setComingSoonOpen(true)} className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-full bg-lime-green hover:bg-lime-green/90 text-black font-urbanist text-sm font-medium transition-colors">
              Get Involved
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white">
                <svg width="12" height="12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.011 11.1927C24.2222 11.1929 24.4247 11.2768 24.574 11.4262C24.7233 11.5755 24.8073 11.778 24.8074 11.9892L24.8074 21.0057C24.8112 21.1126 24.7934 21.2192 24.7551 21.3192C24.7168 21.4191 24.6587 21.5103 24.5844 21.5873C24.51 21.6643 24.421 21.7255 24.3224 21.7673C24.2239 21.8092 24.118 21.8307 24.011 21.8307C23.904 21.8307 23.798 21.8092 23.6995 21.7673C23.601 21.7255 23.5119 21.6643 23.4376 21.5873C23.3633 21.5103 23.3052 21.4191 23.2669 21.3192C23.2286 21.2192 23.2107 21.1126 23.2145 21.0057L23.2145 13.9127L12.5525 24.5747C12.4031 24.7241 12.2004 24.8081 11.989 24.8081C11.7777 24.8081 11.5749 24.7241 11.4255 24.5747C11.276 24.4252 11.1921 24.2225 11.1921 24.0111C11.1921 23.7998 11.276 23.5971 11.4255 23.4476L22.0875 12.7856L14.9945 12.7856C14.8875 12.7894 14.7809 12.7716 14.681 12.7333C14.5811 12.695 14.4899 12.6369 14.4129 12.5626C14.3359 12.4882 14.2747 12.3992 14.2328 12.3007C14.191 12.2021 14.1694 12.0962 14.1694 11.9892C14.1694 11.8822 14.191 11.7762 14.2328 11.6777C14.2747 11.5792 14.3359 11.4901 14.4129 11.4158C14.4899 11.3415 14.5811 11.2834 14.681 11.2451C14.7809 11.2068 14.8875 11.189 14.9945 11.1927L24.011 11.1927Z" fill="white"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Coming Soon Modal */}
      <Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
        <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-md border border-black/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-urbanist">Coming Soon</DialogTitle>
            <DialogDescription className="font-urbanist">
              We’re crafting this experience. Check back shortly!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 flex items-center justify-center">
            <div className="relative w-24 h-24">
              {/* Simple animated ping effect */}
              <span className="absolute inset-0 rounded-full bg-lime-300 opacity-40 animate-ping" />
              <span className="absolute inset-2 rounded-full bg-lime-400 opacity-60 animate-pulse" />
              <span className="absolute inset-4 rounded-full bg-black flex items-center justify-center text-white font-urbanist">
                Soon
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
