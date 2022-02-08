import React from "react";
// import image from "../assets/images/1.jpg";

export default function Card(props) {
  console.log(props.tour);
  return (
    <div>
      <div className="p-10">
        {/* Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <img
              className="w-full h-48"
              src={props.tour.image}
              alt="Mountain"
            ></img>
            <div className="font-bold text-xl mb-2">{props.tour.title}</div>
            <p className="text-gray-700 text-base">{props.tour.description}</p>
            <p className="p-2 text-xl font-bold text-pink-600">
              Price: {props.tour.price}/-
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
