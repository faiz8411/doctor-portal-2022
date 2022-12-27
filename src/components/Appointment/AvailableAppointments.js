import { format } from "date-fns";
import React, { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 className="text-center text-cyan-500 text-2xl font-bold">Available Appointments on {format(date, "PP")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
