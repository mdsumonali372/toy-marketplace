import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";

const ViewDetails = () => {
  const { loading } = useContext(AuthContext);
  const viewData = useLoaderData();
  useTitle("Viewdetails");
  const {
    sellerName,
    toyName,
    toyImg,
    category,
    price,
    rating,
    quantity,
    description,
  } = viewData;
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-14 flex gap-10">
        <div className="md:w-1/2">
          <img src={toyImg} className="w-3/4" alt="" />
        </div>
        <div className="md:w-1/2">
          <h6 className="text-xl font-bold">Category: {category}</h6>
          <h1 className="text-3xl font-bold text-[#2e2f32] mt-5">{toyName}</h1>
          <p className="mt-4 mb-0 flex gap-2 items-center">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </p>
          <p className="text-2xl font-bold text-[#2a8703] mt-4">
            Price Now: ${price}
          </p>
          <p className="mt-5">
            Availabe Quanity: {quantity ? quantity : "Out Of Stock"}{" "}
          </p>
          <p className="mt-5">
            Description: {description ? description : "No Description Added"}{" "}
          </p>
          <h4 className="mt-5 text-2xl font-bold">Seller Name: {sellerName}</h4>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
