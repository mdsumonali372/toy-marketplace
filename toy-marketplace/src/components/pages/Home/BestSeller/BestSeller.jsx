import img1 from "../../../../assets/1.jpg";
import img2 from "../../../../assets/2.jpg";
import im3 from "../../../../assets/3.jpg";

const BestSeller = () => {
  return (
    <div className="mt-14 max-w-screen-xl mx-auto px-4 md:px-0">
      <h2 className="text-3xl font-bold mt-14">Best Seller</h2>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Multipet Look Who's Talking Pig Dog Toy
              </h2>
              <p>Price: $300</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                goDog Bubble Plush Dragons Squeaky Dog Toy
              </h2>
              <p>Price: $250</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={im3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Peanuts for Pets Snoopy</h2>
              <p>Price: $400</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={img1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Multipet Look Who's Talking Pig Dog Toy
              </h2>
              <p>Price: $300</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                goDog Bubble Plush Dragons Squeaky Dog Toy
              </h2>
              <p>Price: $250</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/3 h-60" src={im3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Peanuts for Pets Snoopy</h2>
              <p>Price: $400</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img src={dog} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default BestSeller;
