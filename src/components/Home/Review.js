import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa aliquam ullam fugiat inventore quia accusantium dignissimos vero corrupti tempore laboriosam voluptas quos
          nulla dolores, et obcaecati ad illo totam soluta!
        </p>
        <div class="my-5 flex">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.imgLink} alt="face" />
            </div>
          </div>
          <div className="my-7 mx-3">
            {" "}
            <h4 className="font-bold text-gray-500">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
