import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState();
  const [modalData, setModalData] = useState([]);
  const [activeTab, setActiveTab] = useState("asc");
  useTitle("My Toys");
  // const [control, setControl] = useState(false);
  const {
    _id,
    toyName,
    category,
    price,
    quantity,
    toyImg,
    description,
    rating,
  } = modalData;
  // const toyId = modalData?._id;
  console.log(modalData);
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-swart.vercel.app/mytoys/${user?.email}?sort=${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user, activeTab]);

  const handleUpdate = (id) => {
    const findData = toys?.find((toy) => toy._id === id);
    setModalData(findData);
  };

  const toyUpdated = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyImg = form.toyImg.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toysUpdate = {
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
    console.log(toysUpdate);
    fetch(`https://toy-marketplace-server-swart.vercel.app/toyupdated/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-swart.vercel.app/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((ty) => ty._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <h2 className="text-center mb-10 text-5xl font-bold">My Toys</h2>
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
              <th>
                <div className="flex gap-10">
                  <div
                    onClick={() => handleTabClick("asc")}
                    className={`py-2 px-4 btn ${
                      activeTab == "asc"
                        ? "bg-red-500 text-white border-b-blue-600 border-2 "
                        : ""
                    }`}
                  >
                    Asc
                  </div>
                  <div
                    onClick={() => handleTabClick("desc")}
                    className={`py-2 btn px-4 ${
                      activeTab == "desc"
                        ? "bg-red-500 text-white border-b-blue-600 border-2 "
                        : ""
                    }`}
                  >
                    Desc
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {toys?.slice(0, 20).map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy?.sellerName}</td>
                <td>{toy?.toyName.slice(0, 20)}...</td>
                <td>{toy?.category}</td>
                <td>${toy?.price}</td>
                <td>{toy?.quantity}</td>
                <td>
                  <label
                    onClick={() => handleUpdate(toy._id)}
                    htmlFor="my-modal-6"
                    className="btn"
                  >
                    Edit
                  </label>
                  <button
                    onClick={() => handleDelete(toy?._id)}
                    className="btn ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={toyUpdated} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  defaultValue={toyName}
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
              <div className="form-control hidden">
                <input
                  type="text"
                  defaultValue={_id}
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
                  defaultValue={toyImg}
                  placeholder="Toy URL"
                  className="input input-bordered"
                />
              </div>
              <div>
                <select
                  name="category"
                  defaultValue={category}
                  className="select w-full max-w-xs border border-purple-700"
                >
                  <option value="" disabled defaultValue>
                    Pick your favorite Category
                  </option>
                  <option
                    value="teddy bear"
                    selected={category === "teddy bear"}
                  >
                    Teddy Bear
                  </option>
                  <option value="horse" selected={category === "horse"}>
                    Horse
                  </option>
                  <option value="dogs" selected={category === "dogs"}>
                    Dogs
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={quantity}
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
                  defaultValue={description}
                  className="textarea w-full border border-purple-700"
                  placeholder="Detail description"
                ></textarea>
              </div>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Update" />
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
