import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/navbar';
import BannerSlider from './body/content';
import MovieRow from './body/movierow';
import Login from './components/Login';
import Footer from './footer/footer';
import Movies from './components/movie';
import Unavailable from './components/Unavailable';

// Search list containing your Tamil movies & English series
const searchDatabase = [
  {
    id: 1,
    title: "Ponniyin Selvan: I",
    genre: "Action • Historical • Drama",
    rating: "13+",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
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
    title: "Master",
    genre: "Action • Thriller",
    rating: "16+",
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
  },
  {
    id: 6,
    title: "Raayan",
    genre: "Action • Crime • Revenge",
    rating: "18+",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Raayan_poster.jpg",
  },
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

// Full Homepage Component
function Home({ searchQuery, setSearchQuery }) {
  // Filter movies when user types
  const filteredMovies = searchDatabase.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* If user typed in search bar, display search results */}
      {searchQuery.trim() !== '' ? (
        <div className="pt-24 px-6 md:px-12 py-8 min-h-[70vh] text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-neutral-300">
            Results for: <span className="text-sky-400">"{searchQuery}"</span>
          </h2>

          {filteredMovies.length > 0 ? (
            /* Movie grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-neutral-900 rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                    />
                    <span className="absolute top-2 left-2 bg-sky-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                      Prime
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm truncate text-neutral-100 group-hover:text-sky-400">
                      {movie.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 truncate">{movie.genre}</p>
                    <span className="inline-block mt-2 text-[10px] text-neutral-400 border border-neutral-700 px-1 rounded">
                      {movie.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* NO RESULTS FOUND STATE */
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-neutral-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0zM10 14a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
              <h3 className="text-xl font-bold text-neutral-200">No results found</h3>
              <p className="text-sm text-neutral-500 mt-1 max-w-sm">
                We couldn't find any title matching "{searchQuery}". Check the spelling or search for another movie.
              </p>
            </div>
          )}
        </div>
      ) : (
        /* NORMAL VIEW (Untouched) */
        <div className="pt-16">
          <BannerSlider />
          <MovieRow />
        </div>
      )}

      <Footer />
    </>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950">
      <Routes>
        <Route
          path="/"
          element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />

        <Route path="/tv-shows" element={<Unavailable title="TV Shows" />} />
        <Route path="/live-tv" element={<Unavailable title="Live TV" />} />
        <Route path="/subscription" element={<Unavailable title="Subscription" />} />
      </Routes>
    </div>
  );
}

export default App;