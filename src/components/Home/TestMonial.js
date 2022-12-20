import React from "react";
import quote from "../../images/icons/quote.svg";
import Review from "./Review";
const TestMonial = () => {
  const reviews = [
    { _id: 1, name: "Winson Herry", location: "California", imgLink: "https://i.ibb.co/HX87vsF/people-1.png" },
    { _id: 2, name: "Lionel Messi", location: "Rojario", imgLink: "https://i.ibb.co/Rvhpd0R/Qatar-Soccer-WCup-Match-Moments-Day-24-Photo-Gallery-89324.jpg" },
    { _id: 3, name: "Enjzo Fernandez", location: "Rojario", imgLink: "https://i.ibb.co/tCtDXKF/Getty-Images-1444804761.jpg" },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-cyan-500 font-bold">Testimonals</h4>
          <h2 className="text-3xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default TestMonial;
