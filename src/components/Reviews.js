import React from "react";

export default function Reviews() {
  return (
    <div>
      <div className="bg-teal-200 h-96">
        <Review></Review>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div>
      <div className="h-96 mx-auto">
        <p className="text-center mx-auto text-3xl font-bold text-stone-600">
          Happy Customers
        </p>
        <div className="max-w-sm w-full lg:max-w-full sm:max-w-full lg:flex sm:flex items-center">
          <div className="py-10 pl-10 mx-auto">
            <div className="border-l-0 border-t bg-orange-300 rounded-b rounded-r p-4 flex flex-col justify-between leading-normal shadow-xl">
              <div className="mb-8">
                {/* <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p> */}
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                {/* <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="/img/jonathan.jpg"
                  alt="Avatar"
                ></img> */}
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
