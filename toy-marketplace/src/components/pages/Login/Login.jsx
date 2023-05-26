import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navivate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("Login");

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        navivate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError("email/pass wrong");
      });
  };

  const googleLoginUser = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navivate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="md:w-1/2 w-full h-full shadow-2xl md:mx-auto my-4 bg-[#FCF9F4] p-20 mt-20">
      <h2 className="text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSignIn} className="w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <p className="text-red-600">{error}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?
        <Link className="text-xl font-bold underline" to="/registration">
          Register here
        </Link>
      </p>
      <div className="text-center mt-10">
        <div className="divider">OR</div>
        <button
          onClick={googleLoginUser}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
