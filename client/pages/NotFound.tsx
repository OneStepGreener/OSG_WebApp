import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-6xl font-urbanist font-bold text-emerald-800 mb-2">404</h1>
          <h2 className="text-2xl font-urbanist font-medium text-emerald-700 mb-4">Page Not Found</h2>
          <p className="text-emerald-600 font-urbanist">
            This page doesn't exist yet. Let's get you back to building a sustainable future.
          </p>
        </div>
        
        <Link 
          to="/OSG"
          className="inline-flex items-center gap-2 px-6 py-3 bg-lime-green hover:bg-lime-green/90 text-black font-urbanist font-medium rounded-full transition-colors"
        >
          Return Home
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M5 12h14m-7-7 7 7-7 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
