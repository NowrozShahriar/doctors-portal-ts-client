import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <section className="px-7">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
    </section>
  );
};

export default Home;
