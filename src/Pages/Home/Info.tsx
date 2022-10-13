import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const Info = () => {
  return (
    <div className="grid grid-cols-1 gap-7 m-7 lg:grid-cols-3">
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} title="Opening Hours" description="Lorem Ipsum is simply dummy text of the pri"></InfoCard>
      <InfoCard bgClass="bg-accent" img={marker} title="Visit our location" description="Brooklyn, NY 10036, United States"></InfoCard>
      <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} title="Contact us now" description="+000 123 456789"></InfoCard>
    </div>
  );
};

export default Info;
