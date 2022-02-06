import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from "../assets/cities.json";

export default function Search(props) {
  console.log(props);
  //Emit seached city on searched = true;
  const [cities, setCities] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const inputEl = useRef(null);
  const searchKeyword = (event) => {
    const searchText = event.target.value;
    if (searchText.length === 0) {
      return setCities(data);
    }
    if (searchText.length > 3) {
      console.log(searchText);
      const citiesList = data.filter((city) => {
        return city.name.toLowerCase().includes(searchText);
      });
      setCities(citiesList);
    }
  };

  const setInputValueHandler = (city) => {
    console.log(city.target.innerText);
    inputEl.current.value = city.target.innerText;
  };

  return (
    <div>
      <input
        ref={inputEl}
        type="search"
        onChange={searchKeyword}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        className="border-2 border-solid border-zinc-900 p-4 w-96"
        placeholder="Any Places in you mind?"
      />
      {cities && cities.length && isOpen && (
        <div
          className="search-box h-36 absolute bg-white w-96 divide-y divide-solid"
          style={{ overflow: "scroll" }}
        >
          {cities.map((city) => (
            // <Link to={'/places/' + city.name.toLowerCase()}><p className='hover:text-pink-300 hover:font-bold cursor-pointer'>{city.name}</p></Link>
            <div className="">
              <Link className=" " to={"/places/" + city.name.toLowerCase()}>
                <p
                  key={city.id}
                  onClick={setInputValueHandler}
                  className=" text-xl hover:text-pink-300 hover:font-bold cursor-pointer"
                >
                  {city.name}
                </p>
                <p className="text-sm text-stone-500">{city.state}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
