import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import Card from "./Card";

const TOUR_PACKAGES = [
  {
    title: "Mountain",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "",
    image: "https://pixabay.com/images/id-6983434/",
    category: "mountain",
    hashtag: "",
  },
  {
    title: "Honeymoon",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "",
    image: "",
    category: "honeymoon",
    hashtag: "",
  },
  {
    title: "Solo",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "2500",
    image: "",
    category: "solo",
    hashtag: "",
  },
  {
    title: "Friends",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "",
    image: "",
    category: "friends",
    hashtag: "",
  },
  {
    title: "Manali",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "",
    image: "",
    category: ["honeymoon", "friends"],
    hashtag: "",
  },
  {
    title: "Trekking",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Voluptatibus quia, Nonea! Maiores et perferendis eaque,
    exercitationem praesentium nihil.`,
    price: "",
    image: "",
    category: "trek",
    hashtag: "",
  },
  {
    title: "Near Me",
    description: "Places near me",
    price: "2500",
    image: "",
    category: "",
    hashtag: "",
  },
  {
    title: "Kotna",
    description: "Kotna is a place near vadodara, for kayakking",
    price: "1200",
    category: "near",

    hashtag: "",
  },
];

export default function Packages() {
  const categories = [
    "All",
    "Near You",
    "Honeymoon",
    "Party",
    "Solo",
    "Up Comming",
    "Friends",
    "Trekking",
  ];
  const [activeId, setActiveId] = useState(null);
  const [tourList, setTourList] = useState([]);

  // const buttonEl = useRef(null);
  const handleClick = (e, idx) => {
    setActive(e, idx);
    let tours = [];
    if (!e.target.value || e.target.value === "all") {
      tours = TOUR_PACKAGES; // get from state
    } else {
      tours = TOUR_PACKAGES.filter((tour) => {
        if (tour.category === e.target.value) {
          console.log(tour);
          return tour;
        }
      });
    }
    setTourList(tours);
  };

  useEffect(() => {
    setTourList(TOUR_PACKAGES);
    setActiveId(1);
  }, []);

  const setActive = useCallback((event, id) => {
    console.log(event.target, id);
    setActiveId(id + 1);
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="">
          {categories.map((cat, idx) => {
            return (
              <Button
                key={"button-" + idx}
                value={cat.toLowerCase().split(" ").join("")}
                className={activeId && activeId === idx + 1 && "active"}
                onClick={(e) => handleClick(e, idx)}
              >
                {cat}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="container mx-auto relative grid md:grid-cols-2 lg:grid-cols-4">
        {tourList &&
          tourList.map((tour, idx) => {
            return <Card key={idx} tour={tour}></Card>;
          })}
      </div>
    </div>
  );
}
