import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-purple-700 py-20 h-[100vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white my-9">
          404 page not found
        </h2>
        <Link to="/">
          <button className="btn">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
