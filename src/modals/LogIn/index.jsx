import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <p className="text-right text-blue-500 text-xs mt-1"><a href="#">Forgot password?</a></p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-gray-600">or</div>
        <div className="mt-4">
          <button
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100"
            type="button"
          >
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
            Continue with Google
          </button>
        </div>
        <div className="mt-2">
          <button
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100"
            type="button"
          >
            <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" className="mr-2" />
            Continue with Facebook
          </button>
        </div>
        <div className="mt-2">
          <button
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded w-full flex items-center justify-center hover:bg-gray-100"
            type="button"
          >
            <img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" alt="Apple" className="mr-2" />
            Continue with Apple
          </button>
        </div>
        <div className="mt-4 text-center text-gray-600">
          New to EduVista? <Link to="/signup" className="text-blue-500">Sign up</Link>
        </div>
        <div className="mt-4 text-center text-gray-600 text-xs">
          Log in with your organization
        </div>
        <div className="mt-2 text-center text-gray-600 text-xs">
          Having trouble logging in? <a href="#" className="text-blue-500">Learner help center</a>
        </div>
        <div className="mt-2 text-center text-gray-600 text-xs">
          This site is protected by reCAPTCHA Enterprise and the Google <a href="#" className="text-blue-500">Privacy Policy</a> and <a href="#" className="text-blue-500">Terms of Service</a> apply.
        </div>
      </div>
    </div>
  );
};

export default LogIn;
