import { Link } from 'react-router-dom';
import Navbar from '../Header/navbar';

function Unavailable({ title = "Feature" }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
        {/* Info Icon */}
        <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 text-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h1>
        <p className="text-neutral-400 text-sm max-w-md mb-6">
          Currently this feature is not available. We are working hard to bring it to you soon!
        </p>

        <Link
          to="/"
          className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Explore Home
        </Link>
      </div>
    </div>
  );
}

export default Unavailable;