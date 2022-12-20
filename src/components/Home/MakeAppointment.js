import React from "react";
import doctor from "../../images/images/doctor.png";
import appointment from "../../images/images/appointment.png";
import PrimaryButton from "../Reiview/Shared/PrimaryButton";
const MakeAppointment = () => {
  return (
    <div className="mt-20">
      <section
        style={{
          background: `url(${appointment})`,
        }}
        className="flex justify-center items-center pt-14"
      >
        <div className="flex-1 hidden lg:block">
          <img style={{ marginTop: "-160px" }} src={doctor} alt="" />
        </div>
        <div className="flex-1">
          <h3 className="text-cyan-500">Appointment</h3>
          <h2 className="text-3xl text-white py-5">Make an appointment Today</h2>
          <p className="text-white mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam incidunt eos, ab maiores nemo temporibus delectus odit ad sed hic quos totam, odio, ipsum vitae tenetur?
            Omnis necessitatibus exercitationem ex ea, quo, consequuntur ratione doloremque, maxime reiciendis dolorum perspiciatis! Temporibus.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
