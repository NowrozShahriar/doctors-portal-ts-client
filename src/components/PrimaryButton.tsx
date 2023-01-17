import React from "react";

type PrimaryButtonProps = {
  children: string;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button className="font-bold text-white uppercase btn btn-primary bg-gradient-to-r from-secondary to-primary">
      {props.children}
    </button>
  );
};

export default PrimaryButton;
