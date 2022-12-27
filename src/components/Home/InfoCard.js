import React from "react";

const InfoCard = ({ img, bgColor, bgTitle }) => {
  console.log(bgTitle);

  return (
    <div class={`card lg:card-side  shadow-xl ${bgColor}`}>
      <figure className="pl-5 pt-4">
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{bgTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
