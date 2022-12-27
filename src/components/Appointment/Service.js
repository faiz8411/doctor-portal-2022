import React from "react";

const Service = ({ service }) => {
  const { _id, name, slots } = service;
  console.log(slots.length);
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-teal-400">{name}</h2>
          <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">no slot available</span>}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div class="card-actions">
            <button disabled={slots.length === 0} class="btn bg-teal-400 uppercase">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
