import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col justify-center items-center px-4 text-white">
      <Link to="/" className="text-3xl font-bold text-sky-400 mb-8">
        Prime
      </Link>

      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-lg p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-6">Sign In</h1>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Email or mobile phone number
            </label>
            <input
              type="text"
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              placeholder="Enter email or phone"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 font-semibold py-2 rounded text-sm transition-colors mt-2"
          >
            Sign In to Prime
          </button>
        </form>

        <p className="text-xs text-neutral-400 mt-6 text-center">
          By signing in, you agree to the Prime Terms of Use.
        </p>

        <div className="mt-6 pt-4 border-t border-neutral-800 text-center">
          <Link to="/" className="text-xs text-sky-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;