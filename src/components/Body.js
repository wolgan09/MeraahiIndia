import React, { useState } from "react";
import image from "../assets/images/travel.jpg";
import { Button } from "./Button";
import Packages from "./Packages";
import Search from "./Search";
import "./Body.css";
import Reviews from "./Reviews";

const mystyle = {
  backgroundImage: "url(" + image + ")",
};

export default function Body() {
  return (
    <div className="">
      <Landing></Landing>
      <Packages></Packages>
      <Reviews></Reviews>
    </div>
  );
}

function Landing() {
  const [searched, setSearched] = useState(false);
  const handler = () => {
    setSearched(true);
    // emit city searched from Search comp.
  };

  return (
    <div>
      <section
        id="landing"
        className="landing-page"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img className=""style={{maxHeight:"15%"}} src={image} alt="landing"  ></img> */}
        <div className="opacity-90">
          <div className="search-box-wrapper top-50 max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 relative">
            <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
              Start travelling with us
            </h2>
            <div className="mt-8 flex justify-center">
              <Search searched={searched}></Search>
              <Button onClick={handler}>Search</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
