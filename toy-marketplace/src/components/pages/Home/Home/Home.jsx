import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import useTitle from "../../../../hooks/useTitle";
import { AuthContext } from "../../../../providers/AuthProvider";
import BestSeller from "../BestSeller/BestSeller";
import CategoryToy from "../CategoryToy/CategoryToy";
import ImageGellary from "../ImageGellary/ImageGellary";
import NewsSletter from "../NewsSletter/NewsSletter";
import "./Home.css";
const Home = () => {
  const [toys, setToys] = useState();
  const { loading } = useContext(AuthContext);
  useTitle("Home");
  // console.log(toys);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    fetch("https://toy-marketplace-server-swart.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      <div className="hero-part h-[60vh] md:h-[100vh]">
        <div className="max-w-screen-xl mx-auto flex items-center h-full px-4 md:px-0">
          <div className="md:w-3/4 text-center md:text-left">
            <h2 className="md:text-8xl md:text-left font-black text-[#12265a] mt-5">
              Learn & Play!
            </h2>
            <p className="text-xl md:text-left text-[#12265a] my-5">
              We work every day to build the foundations for amazing futures,
              both for the child and for our community.
            </p>
            <button className="btn btn-warning">Learn More</button>
          </div>
        </div>
      </div>
      {/* gallery  */}
      <div className="max-w-screen-xl mx-auto mt-10 px-4 md:px-0">
        <h2 className="text-2xl font-bold">Gallery Imges</h2>
        {/* <ImageGellary></ImageGellary> */}
        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-10 mt-14">
          {toys?.slice(0, 6).map((toy) => (
            <ImageGellary key={toy._id} toy={toy}></ImageGellary>
          ))}
        </div>
      </div>
      {/* shop by category */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <CategoryToy></CategoryToy>
      </div>

      {/* best selling */}
      <BestSeller></BestSeller>

      {/* news letter */}
      <NewsSletter></NewsSletter>
    </div>
  );
};

export default Home;
