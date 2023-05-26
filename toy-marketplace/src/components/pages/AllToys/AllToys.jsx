import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("All Toys");
  useEffect(() => {
    fetch("https://toy-marketplace-server-swart.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleSearch = () => {
    fetch(
      `https://toy-marketplace-server-swart.vercel.app/toySearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <h2 className="text-center mb-10 text-5xl font-bold">All Toys</h2>
      <div className="text-center my-10">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn ml-5">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.slice(0, 20).map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName.slice(0, 30)}...</td>
                <td>{toy?.category}</td>
                <td>${toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  <Link to={`/viewdetails/${toy._id}`}>
                    <button className="btn">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
