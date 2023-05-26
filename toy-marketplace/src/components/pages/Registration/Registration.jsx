import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle("Registration");
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    createUser(email, password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        updateProfile(signUpUser, { displayName: name, photoURL: photo })
          .then()
          .catch((error) => console.log(error));
        logOut();
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-1/2 w-full h-full shadow-2xl mx-auto my-4 bg-[#FCF9F4] p-20 mt-20">
      <h2 className="text-center text-2xl font-bold">Registration</h2>
      <form onSubmit={handleSignUp} className="w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
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
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="mt-4 text-center">
        Alredy have an account?
        <Link className="text-xl font-bold underline" to="/login">
          Login here.
        </Link>
      </p>
    </div>
  );
};

export default Registration;
