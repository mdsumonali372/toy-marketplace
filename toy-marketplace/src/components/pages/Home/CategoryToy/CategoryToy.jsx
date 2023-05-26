import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const CategoryToy = () => {
  const { loading } = useContext(AuthContext);
  const [toy, setToy] = useState([]);
  const [activeTab, setActiveTab] = useState("horse");
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-swart.vercel.app/alltoys/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, [activeTab]);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const handleTabClick = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mt-14">Shop By Category</h2>
      <div className="flex gap-10 justify-center items-center mt-5">
        <div
          onClick={() => handleTabClick("horse")}
          className={`py-2 px-4 ${
            activeTab == "horse"
              ? "bg-red-500 text-white border-b-blue-600 border-2 "
              : ""
          }`}
        >
          Horse
        </div>
        <div
          onClick={() => handleTabClick("dogs")}
          className={`py-2 px-4 ${
            activeTab == "dogs"
              ? "bg-red-500 text-white border-b-blue-600 border-2"
              : ""
          }`}
        >
          Dogs
        </div>
        <div
          onClick={() => handleTabClick("teddy bear")}
          className={`py-2 px-4 ${
            activeTab == "teddy bear"
              ? "bg-red-500 text-white border-b-blue-600 border-2"
              : ""
          }`}
        >
          Teddy Bear
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {toy?.map((ty) => (
          <div key={ty._id} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={ty.toyImg} className="h-60" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ty.toyName.slice(0, 20)}...</h2>
              <p>Price: ${ty.price}</p>
              <div className="flex items-center gap-2">
                <Rating style={{ maxWidth: 100 }} value={ty.rating} readOnly />
                {ty.rating}
              </div>
              <div className="card-actions justify-center md:justify-end">
                <Link to={`/viewdetails/${ty._id}`}>
                  <button className="btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryToy;
