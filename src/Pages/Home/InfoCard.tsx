import React from "react";

type InfoCardProps = {
  img: string
}

const InfoCard = (props: InfoCardProps) => {
  return (
    <div className="text-white shadow-xl card lg:card-side bg-base-100 bg-accent">
      <figure className="pl-6 ">
        <img src={props.img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
