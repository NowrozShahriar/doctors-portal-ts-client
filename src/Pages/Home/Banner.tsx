import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../../components/PrimaryButton";

const Banner = () => {
  return (
    <section className="my-4 lg:my-40 hero">
      <div className="flex-col p-0 px-7 hero-content lg:flex-row-reverse">
        <img src={chair} className="my-5 rounded-lg lg:w-1/2" alt="" />
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
