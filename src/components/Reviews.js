import React from "react";

export default function Reviews() {
  return (
    <div className="bg-teal-200 h-96">
      <div className="flex container mx-auto">
        <div className="flex-1  my-auto">
          <p className="text-center text-3xl font-bold text-stone-600">
            Happy Customers
          </p>
        </div>

        {[...Array(3)].map((tour, idx) => {
          return <Review></Review>;
        })}
      </div>
    </div>
  );
}

function Review() {
  return (
    <div>
      <div className="h-96 mx-auto">
        <div className="max-w-sm mx-auto lg:flex sm:flex items-center">
          <div className="py-10 pl-10 mx-auto">
            <div className="border-l-0 border-t bg-orange-300 rounded-b rounded-r p-4 flex flex-col justify-between leading-normal shadow-xl">
              <div className="mb-8">
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
