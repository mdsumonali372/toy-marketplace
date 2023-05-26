import { useContext } from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add Toys");
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyImg = form.toyImg.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toys = {
      sellerName: user?.displayName,
      sellerEmail: user?.email,
      toyName,
      toyImg,
      category,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toys);
    fetch("https://toy-marketplace-server-swart.vercel.app/alltoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("product added successfuly");
        }
        form.reset();
      });
  };
  return (
    <div className="md:w-1/2 w-full h-full shadow-2xl mx-auto my-4 bg-[#FCF9F4] p-20 mt-20">
      <h2 className="text-center text-2xl font-bold">Add Toys</h2>
      <form onSubmit={handleAddToys} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="Name"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy URL</span>
            </label>
            <input
              type="text"
              name="toyImg"
              placeholder="Toy URL"
              className="input input-bordered"
            />
          </div>
          <div>
            <select name="category" className="select w-full max-w-xs">
              <option value="" disabled defaultValue>
                Pick your favorite Category
              </option>
              <option value="teddy bear">Teddy Bear</option>
              <option value="horse">Horse</option>
              <option value="dogs">Dogs</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">description</span>
            </label>
            <textarea
              name="description"
              className="textarea w-full"
              placeholder="Detail description"
            ></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Add Toys" />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
