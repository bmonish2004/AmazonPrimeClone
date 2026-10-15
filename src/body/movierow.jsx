import { useRef } from 'react';

// Hardcoded movie lists directly inside the component file
const trendingMovies = [
  {
    id: 1,
    title: "Reacher",
    genre: "Action • Crime",
    rating: "18+",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "The Terminal List",
    genre: "Action • Drama",
    rating: "18+",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Invincible",
    genre: "Animation • Sci-Fi",
    rating: "16+",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Jack Ryan",
    genre: "Action • Thriller",
    rating: "16+",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Fallout",
    genre: "Sci-Fi • Adventure",
    rating: "18+",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "The Summer I Turned Pretty",
    genre: "Romance • Drama",
    rating: "13+",
    image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=600&q=80",
  },
];

const actionMovies = [
  {
    id: 7,
    title: "The Boys",
    genre: "Action • Comedy",
    rating: "18+",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    title: "Citadel",
    genre: "Spy • Thriller",
    rating: "16+",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    title: "Wheel of Time",
    genre: "Fantasy • Adventure",
    rating: "16+",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    title: "Gen V",
    genre: "Sci-Fi • Drama",
    rating: "18+",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    title: "Rings of Power",
    genre: "Fantasy • Drama",
    rating: "13+",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
  },
];

const tamilMovies = [
  {
    id: 1,
    title: "Master",
    genre: "Action • Thriller",
    rating: "16+",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
  },
  {
    id: 2,
    title: "Jai Bhim",
    genre: "Legal Drama • Crime",
    rating: "16+",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Jai_Bhim_film_poster.jpg",
  },
  {
    id: 3,
    title: "Soorarai Pottru",
    genre: "Drama • Inspiring",
    rating: "13+",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Soorarai_Pottru_poster.jpg",
  },
  {
    id: 4,
    title: "Karnan",
    genre: "Action • Social Drama",
    rating: "16+",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Karnan_2021_poster.jpg",
  },
  {
    id: 5,
    title: "Ponniyin Selvan: I",
    genre: "Action • Historical • Drama",
    rating: "13+",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
  },
  {
    id: 6,
    title: "Raayan",
    genre: "Action • Crime • Revenge",
    rating: "18+",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Raayan_poster.jpg",
  },
];

const webSeries = [
  {
    id: 7,
    title: "The Boys",
    genre: "Action • Dark Comedy • Superhero",
    rating: "18+",
    image: "https://image.tmdb.org/t/p/w500/2Zmvd97zZTaegZ4134pY2991kG1.jpg",
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Rings of Power",
    genre: "Action • Adventure • Fantasy",
    rating: "13+",
    image: "https://image.tmdb.org/t/p/w500/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg",
  },
  {
    id: 9,
    title: "Reacher",
    genre: "Action • Crime • Thriller",
    rating: "18+",
    image: "https://image.tmdb.org/t/p/w500/j732tXi4jNX20ufNgOzGQCVv9QI.jpg",
  },
  {
    id: 10,
    title: "Fallout",
    genre: "Sci-Fi • Action • Post-Apocalyptic",
    rating: "18+",
    image: "https://image.tmdb.org/t/p/w500/AnsSKR9LuK0T9bAILVa8BTRAQqK.jpg",
  },
  {
    id: 11,
    title: "Citadel",
    genre: "Action • Espionage • Sci-Fi",
    rating: "16+",
    image: "https://image.tmdb.org/t/p/w500/9PfOntUk5QCm52MH7l9q3bTlg3k.jpg",
  },
  {
    id: 12,
    title: "Invincible",
    genre: "Animation • Action • Drama",
    rating: "18+",
    image: "https://image.tmdb.org/t/p/w500/dMO0J5v7qOfe5m3aJm80YlGzW5C.jpg",
  },
];


function SingleRow({ title, items }) {
  const rowRef = useRef(null);

  const slide = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollDistance = clientWidth * 0.75;
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollDistance : scrollLeft + scrollDistance,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="py-4 px-4 md:px-12 relative group/row text-white">
      {/* Category Heading */}
      <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center space-x-2">
        <span className="text-sky-400 font-extrabold text-sm tracking-wide uppercase">Prime</span>
        <span>{title}</span>
      </h2>

      {/* Left Scroll Button */}
      <button
        type="button"
        onClick={() => slide('left')}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity shadow-lg"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Horizontal Cards Scroller */}
      <div
        ref={rowRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-[200px] sm:w-[240px] md:w-[270px] bg-neutral-900 rounded-lg overflow-hidden cursor-pointer group shadow-md transition-transform duration-300 hover:scale-105 hover:z-10"
          >
            {/* Poster Thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <span className="absolute top-2 left-2 bg-sky-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                Prime
              </span>
            </div>

            {/* Info Section */}
            <div className="p-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm truncate text-neutral-100 group-hover:text-sky-400 transition-colors">
                  {movie.title}
                </h3>
                <span className="text-[11px] text-neutral-400 border border-neutral-700 px-1 rounded">
                  {movie.rating}
                </span>
              </div>

              <p className="text-xs text-neutral-400 mt-1 truncate">
                {movie.genre}
              </p>

              {/* Action Buttons */}
              <div className="mt-3 flex items-center space-x-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  className="flex items-center space-x-1 text-xs bg-sky-500 hover:bg-sky-600 px-2.5 py-1 rounded font-medium text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Watch</span>
                </button>

                <button
                  type="button"
                  className="p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                  title="Add to Watchlist"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        type="button"
        onClick={() => slide('right')}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity shadow-lg"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

function MovieRow() {
  return (
    <section className="relative z-20 -mt-10 pb-12 space-y-2">
      <SingleRow title="Top 10 in India" items={trendingMovies} />
      <SingleRow title="Action and Adventure" items={actionMovies} />
       <SingleRow title="Top Tamil Movies" items={tamilMovies} />
        <SingleRow title="Web Series" items={webSeries} />
    </section>
  );
}

export default MovieRow;