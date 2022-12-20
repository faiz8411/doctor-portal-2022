import React from "react";
import appointment from "../../images/images/appointment.png";
import PrimaryButton from "../Reiview/Shared/PrimaryButton";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      class="hero min-h-screen"
    >
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class=" text-2xl font-bold text-cyan-500">Contact Us</h1>
          <h2 class="text-2xl mb-4">Stay connected with us</h2>

          <input type="text" placeholder="Your Address" class="input input-bordered input-secondary w-full max-w-xs" />
          <input type="text" placeholder="Your Email" class="input input-bordered input-secondary w-full max-w-xs mt-4" />
          <textarea type="text" placeholder="Your Message" class="input input-bordered input-secondary w-full max-w-xs h-48 mt-4" />
          <PrimaryButton>SUBMIT</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
