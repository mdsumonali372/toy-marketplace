const ImageGellary = ({ toy }) => {
  return (
    <div
      className="card w-full bg-base-100 shadow-xl"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <figure>
        <img className="h-64 w-full" src={toy?.toyImg} alt="toy" />
      </figure>
    </div>
  );
};

export default ImageGellary;
