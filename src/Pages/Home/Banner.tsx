import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <section className="mr-8 lg:min-h-screen hero">
      <div className="flex-col mx-3 hero-content lg:flex-row-reverse">
        <img
          src={chair}
          className="my-5 rounded-lg shadow-2xl lg:max-w-md"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
