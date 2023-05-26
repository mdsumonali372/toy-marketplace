import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const NewsSletter = () => {
  return (
    <div className="px-4 md:px-0 max-w-screen-xl mx-auto mt-20">
      <h2 className="italic text-2xl font-bold text-center mb-5">Newslleter</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-warning w-full"
      />
      <div className="mt-5 text-center">
        <AwesomeButton type="primary">Subscribe</AwesomeButton>;
      </div>
    </div>
  );
};

export default NewsSletter;
