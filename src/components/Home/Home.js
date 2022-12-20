import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import TestMonial from "./TestMonial";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div className="px-14">
      <Banner />
      <Info />
      <Services />
      <Treatment />
      <MakeAppointment />
      <TestMonial />
      <Contact />
    </div>
  );
};

export default Home;
