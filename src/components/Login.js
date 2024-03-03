import { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/Validate";

export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    checkValidData(email.current.value, password.current.value);
  };

  return (
    <>
      <Header />
      {/* Page Img */}
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="w-full h-screen object-cover"
        />
      </div>
      {/* Login form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-12 bg-black bg-opacity-85 my-36 mx-auto right-0 left-0 absolute text-white"
      >
        <h1 className="text-4xl my-3 pb-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="my-4 p-4 w-full bg-gray-600 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-600 rounded-lg"
          ref={password}
        />
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </>
  );
};
