import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-teal-600">Login</h1>
        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2 text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="border w-full text-base px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter Username"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="password" className="block text-base mb-2 text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border w-full text-base px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex justify-end mt-3">
          <Link href="/" className="text-teal-600 font-semibold text-sm hover:underline hover:decoration-teal-600">
            Forgot Password?
          </Link>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-teal-600 shadow-lg rounded-md w-full py-2 px-2 text-center text-white border-2 border-teal-600 hover:bg-white hover:text-teal-600 transition-all">
            Login
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-center text-gray-500">
            Don&lsquo;t have an account?{' '}
            <Link href="/signup" className="text-teal-600 font-semibold text-sm hover:underline hover:decoration-teal-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
