import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar({ searchQuery = '', setSearchQuery }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md text-white px-4 py-3 border-b border-neutral-800">
            <div className="flex items-center justify-between">

                <div className="flex items-center space-x-6">
                    <Link to="/" className="font-bold text-xl text-sky-400">
                        Prime
                    </Link>

                    <ul className="hidden md:flex items-center space-x-5 text-sm text-gray-300">
                        <li><Link to="/" className="transition-colors hover:bg-white hover:text-black/90 p-2 border-0 rounded-2xl">Home</Link></li>
                        <li><Link to="/movies" className="transition-colors  hover:bg-white hover:text-black/90 p-2 border-0 rounded-2xl">Movies</Link></li>
                        <li><Link to="/tv-shows" className="transition-colors  hover:bg-white hover:text-black/90 p-2 border-0 rounded-2xl">TV Shows</Link></li>
                        <li><Link to="/live-tv" className="transition-colors  hover:bg-white hover:text-black/90 p-2 border-0 rounded-2xl">Live TV</Link></li>
                        <li><Link to="/subscription" className="transition-colors  hover:bg-white hover:text-black/90 p-2 border-0 rounded-2xl">Subscription</Link></li>
                        <li>
                            <select
                                name="categories"
                                className="bg-neutral-900 text-gray-300 py-1 px-2 rounded focus:outline-none cursor-pointer"
                            >
                                <option value="Categories">Categories</option>
                                <option>Action</option>
                                <option>Anime</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Fantasy</option>
                                <option>Horror</option>
                                <option>Romance</option>
                                <option>Science Fiction</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                            className="bg-neutral-900 border border-neutral-700 rounded-full pl-3 pr-8 py-1 text-sm text-white focus:outline-none focus:border-sky-500 w-36 sm:w-48"
                        />
                        <button
                            type="button"
                            className="absolute right-2 text-gray-400 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="relative">
                        {/* Profile Icon Button */}
                        <button
                            type="button"
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="p-1 rounded-full hover:bg-neutral-800 transition-colors focus:outline-none"
                            aria-label="User Account Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-gradient-to-b from-[#19222d] to-[#0f171e] text-white p-5 shadow-2xl border border-neutral-800 z-50">
                                {/* Header Section */}
                                <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase mb-4">
                                    Your Account
                                </p>

                                {/* Account Links */}
                                <ul className="space-y-4 text-sm font-semibold">
                                    <li>
                                        <Link
                                            to="/login"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="block hover:text-sky-400 transition-colors"
                                        >
                                            Sign In
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="block hover:text-sky-400 transition-colors"
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={() => setIsProfileOpen(false)}
                                            className="block hover:text-sky-400 transition-colors"
                                        >
                                            Watch Anywhere
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <button onClick={() => navigate('/login')} className="bg-sky-500 hover:bg-sky-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
                        Join Prime
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
                        aria-label="Toggle navigation"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-3 pt-3 border-t border-neutral-800 space-y-2 text-sm text-gray-300">
                    <Link to="/" className="block py-1 hover:text-white">Home</Link>
                    <Link to="/movies" className="block py-1 hover:text-white">Movies</Link>
                    <Link to="/tv-shows" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">TV Shows</Link>
                    <Link to="/live-tv" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Live TV</Link>
                    <Link to="/subscription" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Subscription</Link>
                    <div className="pt-2">
                        <select
                            name="categories"
                            className="bg-neutral-900 text-gray-300 py-1.5 px-2 rounded focus:outline-none w-full"
                        >
                            <option value="Categories">Categories</option>
                            <option>Action</option>
                            <option>Anime</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Fantasy</option>
                            <option>Horror</option>
                            <option>Romance</option>
                            <option>Science Fiction</option>
                        </select>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;