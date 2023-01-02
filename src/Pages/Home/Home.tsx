import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";

const Home = () => {
  return (
    <section className="px-7">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppoinment></MakeAppoinment>
    </section>
  );
};

export default Home;
