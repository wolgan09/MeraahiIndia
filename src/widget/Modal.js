import React, { useState } from "react";
import { Button } from "../components/Button";

export default function Modal({ comp, openModal, onCloseClick }) {
  const [open, setOpen] = useState(false);
  // const [close, setOpen] = useState(false);
  console.log(openModal);

  return (
    <div className="">
      {/* <!-- Modal Content --> */}
      {/*Close(X)*/}
      {openModal ? (
        <div
          className="lg:absolute md:absolute lg:inset-1/2 w-screen h-screen right-0"
          key={Math.random(2)}
        >
          <div className="actions">
            <Button onClick={() => onCloseClick(false)}>X</Button>
          </div>
          <h4 className="text-black">{openModal}</h4>
          <div className="w-96 h-auto absolute p-5 bg-white rounded border-2">
            {comp}
          </div>
        </div>
      ) : null}
    </div>
  );
}
