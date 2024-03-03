import { Header } from "./Header";

export const Login = () => {
  return (
    <div>
      <Header />
      {/* Page Img */}
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      {/* Login form */}
      <form className="w-4/12 p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 absolute text-white">
        <h1 className="text-4xl my-3 pb-3">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};
