import Navbar from '../Header/navbar';
import MovieRow from '../body/movierow';

function Movies() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white pt-20">
      <Navbar />
      <div className="px-6 md:px-12 py-6">
        <h1 className="text-3xl font-extrabold text-white mb-2">Movies</h1>
        <p className="text-sm text-neutral-400 mb-6">
          Explore movies included with Prime, new releases, and top-rated hits.
        </p>
      </div>
      <MovieRow />
    </div>
  );
}

export default Movies;