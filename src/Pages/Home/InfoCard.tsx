import React from "react";

type InfoCardProps = {
  img: string;
  title: string;
  description: string;
  bgClass: string;
};

const InfoCard = (props: InfoCardProps) => {
  return (
    <div className={`text-white shadow-xl card lg:card-side ${props.bgClass}`}>
      <figure className="p-5">
        <img src={props.img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
