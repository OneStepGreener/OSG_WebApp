import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <nav className="mt-4 w-[97%] max-w-7xl pointer-events-auto">
        <div className="flex items-center justify-between gap-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-2 shadow-lg">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F86cb4012ac1e4e02a3bfc6301ba5077e%2Fe2699d97daab4f39b15f745802e9ca8a?format=webp&width=64"
              alt="One Step Greener logo"
              className="h-7 w-7 object-contain"
            />
            <span className="text-white font-urbanist text-sm sm:text-base">One Step Greener</span>
          </Link>

          {/* Center: Links */}
          <div className="hidden md:flex items-center gap-2 text-white/90 font-urbanist text-sm">
            <NavLink
              to="/about"
              className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 ${isActive ? 'bg-white/15 text-white' : ''}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/waste"
              className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 ${isActive ? 'bg-white/15 text-white' : ''}`}
            >
              Waste
            </NavLink>
            <NavLink
              to="/what-we-do"
              className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 ${isActive ? 'bg-white/15 text-white' : ''}`}
            >
              What We Do
            </NavLink>
            <NavLink
              to="/impact"
              className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 ${isActive ? 'bg-white/15 text-white' : ''}`}
            >
              Our Impact
            </NavLink>
            <NavLink
              to="/knowledge"
              className={({ isActive }) => `px-3 py-1 rounded-full transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 ${isActive ? 'bg-white/15 text-white' : ''}`}
            >
              Knowledge Hub
            </NavLink>
            <a
              href="https://reactapp.tcil.in/Business"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full transition-all duration-200 bg-[#BEFF6B] text-black hover:brightness-95 active:scale-95 inline-flex items-center gap-2"
            >
              Corporate
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white">
                <svg width="12" height="12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.011 11.1927C24.2222 11.1929 24.4247 11.2768 24.574 11.4262C24.7233 11.5755 24.8073 11.778 24.8074 11.9892L24.8074 21.0057C24.8112 21.1126 24.7934 21.2192 24.7551 21.3192C24.7168 21.4191 24.6587 21.5103 24.5844 21.5873C24.51 21.6643 24.421 21.7255 24.3224 21.7673C24.2239 21.8092 24.118 21.8307 24.011 21.8307C23.904 21.8307 23.798 21.8092 23.6995 21.7673C23.601 21.7255 23.5119 21.6643 23.4376 21.5873C23.3633 21.5103 23.3052 21.4191 23.2669 21.3192C23.2286 21.2192 23.2107 21.1126 23.2145 21.0057L23.2145 13.9127L12.5525 24.5747C12.4031 24.7241 12.2004 24.8081 11.989 24.8081C11.7777 24.8081 11.5749 24.7241 11.4255 24.5747C11.276 24.4252 11.1921 24.2225 11.1921 24.0111C11.1921 23.7998 11.276 23.5971 11.4255 23.4476L22.0875 12.7856L14.9945 12.7856C14.8875 12.7894 14.7809 12.7716 14.681 12.7333C14.5811 12.695 14.4899 12.6369 14.4129 12.5626C14.3359 12.4882 14.2747 12.3992 14.2328 12.3007C14.191 12.2021 14.1694 12.0962 14.1694 11.9892C14.1694 11.8822 14.191 11.7762 14.2328 11.6777C14.2747 11.5792 14.3359 11.4901 14.4129 11.4158C14.4899 11.3415 14.5811 11.2834 14.681 11.2451C14.7809 11.2068 14.8875 11.189 14.9945 11.1927L24.011 11.1927Z" fill="white"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-2">
            <Link to="/get-involved" className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-lime-green hover:bg-lime-green/90 text-black font-urbanist text-sm font-medium transition-colors">
              Get Involved
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-black text-white">
                <svg width="12" height="12" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.011 11.1927C24.2222 11.1929 24.4247 11.2768 24.574 11.4262C24.7233 11.5755 24.8073 11.778 24.8074 11.9892L24.8074 21.0057C24.8112 21.1126 24.7934 21.2192 24.7551 21.3192C24.7168 21.4191 24.6587 21.5103 24.5844 21.5873C24.51 21.6643 24.421 21.7255 24.3224 21.7673C24.2239 21.8092 24.118 21.8307 24.011 21.8307C23.904 21.8307 23.798 21.8092 23.6995 21.7673C23.601 21.7255 23.5119 21.6643 23.4376 21.5873C23.3633 21.5103 23.3052 21.4191 23.2669 21.3192C23.2286 21.2192 23.2107 21.1126 23.2145 21.0057L23.2145 13.9127L12.5525 24.5747C12.4031 24.7241 12.2004 24.8081 11.989 24.8081C11.7777 24.8081 11.5749 24.7241 11.4255 24.5747C11.276 24.4252 11.1921 24.2225 11.1921 24.0111C11.1921 23.7998 11.276 23.5971 11.4255 23.4476L22.0875 12.7856L14.9945 12.7856C14.8875 12.7894 14.7809 12.7716 14.681 12.7333C14.5811 12.695 14.4899 12.6369 14.4129 12.5626C14.3359 12.4882 14.2747 12.3992 14.2328 12.3007C14.191 12.2021 14.1694 12.0962 14.1694 11.9892C14.1694 11.8822 14.191 11.7762 14.2328 11.6777C14.2747 11.5792 14.3359 11.4901 14.4129 11.4158C14.4899 11.3415 14.5811 11.2834 14.681 11.2451C14.7809 11.2068 14.8875 11.189 14.9945 11.1927L24.011 11.1927Z" fill="white"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
