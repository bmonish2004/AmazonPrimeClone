import { useState, useEffect } from 'react';

// 1. Movie Data
const movies = [
    {
        id: 1,
        title: "Master",
        tag: "#1 in Tamil Today",
        genre: "Action • Thriller",
        description: "A professor battling alcoholism finds purpose teaching troubled youth ensnared by a dangerous gangster's criminal empire.",
        image: "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
    },
    {
        id: 2,
        title: "The Rings of Power",
        tag: "#1 in India Today",
        description: "Epic drama set thousands of years before the events of J.R.R. Tolkien's The Hobbit and The Lord of the Rings follows an ensemble cast of characters.",
        genre: "Action • Adventure • Fantasy",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 3,
        title: "Citadel",
        tag: "Prime Original",
        description: "Eight years ago, Citadel fell. The independent global spy agency was destroyed by operatives of Manticore. Now, two elite agents must piece together their past.",
        genre: "Thriller • Sci-Fi • Action",
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 4,
        title: "The Boys",
        tag: "Top Rated Series",
        description: "A fun and irreverent take on what happens when superheroes—who are as popular as celebrities—abuse their superpowers rather than use them for good.",
        genre: "Drama • Action • Comedy",
        image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=1600&q=80",
    },
];

function BannerSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Next and Previous Slide Handlers
    const handleNext = () => {
        setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
    };

    // 3. Auto-play every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(timer); // cleanup on unmount
    }, [currentIndex]);

    const currentMovie = movies[currentIndex];

    return (
        <div className="relative w-full h-[450px] md:h-[550px] bg-neutral-950 overflow-hidden text-white select-none">
            {/* 4. Background Image */}
            <img
                src={currentMovie.image}
                alt={currentMovie.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />

            {/* 5. Left & Bottom Dark Gradients (Essential for Prime Video look) */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent w-full md:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

            {/* 6. Content (Title, Details, Buttons) */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                {/* Prime Tag */}
                <span className="text-sky-400 font-bold text-xs md:text-sm uppercase tracking-wider mb-2">
                    {currentMovie.tag}
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 drop-shadow-md">
                    {currentMovie.title}
                </h1>

                {/* Genre / Details */}
                <p className="text-neutral-400 text-xs sm:text-sm font-medium mb-3">
                    {currentMovie.genre}
                </p>

                {/* Description */}
                <p className="max-w-xl text-neutral-300 text-sm md:text-base line-clamp-3 mb-6">
                    {currentMovie.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform active:scale-95">
                        {/* Play Icon */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>Watch Now</span>
                    </button>

                    <button className="bg-neutral-800/80 hover:bg-neutral-700 text-white font-medium px-4 py-3 rounded-lg border border-neutral-700 transition-colors">
                        Details
                    </button>

                    {/* Add to Watchlist Button */}
                    <button
                        className="p-3 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 border border-neutral-700 text-white transition-colors"
                        title="Add to Watchlist"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* 7. Previous Arrow Button */}
            <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                aria-label="Previous Slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* 8. Next Arrow Button */}
            <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
                aria-label="Next Slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* 9. Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {movies.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-7 bg-sky-500" : "w-2 bg-neutral-600 hover:bg-neutral-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default BannerSlider;