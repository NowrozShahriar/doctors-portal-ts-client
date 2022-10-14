import React from "react";

type ServiceProps = {
  service: {
    _id: number;
    img: string;
    title: string;
    description: string;
  };
};

const Service = (props: ServiceProps) => {
  return (
    <div className="shadow-xl card text-accent bg-base-100">
      <figure className="px-10 pt-10">
        <img src={props.service.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="items-center text-center card-body">
        <h2 className="card-title">{props.service.title}</h2>
        <p>{props.service.description}</p>
      </div>
    </div>
  );
};

export default Service;
