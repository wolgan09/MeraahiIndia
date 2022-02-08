import React, { useState } from "react";
import logo from "../logo.svg";
import { Button } from "./Button";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login";
import Modal from "../widget/Modal";
import Contact from "./Contact";

export default function Header() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openContactModal, setContactModal] = useState(false);
  return (
    <div>
      <div className="flex flex-row sticky">
        <div className="basis-1/4 my-1.5">
          <img className="h-10 float-left" alt="logo" src={logo}></img>
          <Link to="/">
            <span className="shrink absolute top-3 text-2xl cursor-pointer">
              Meraahi India
            </span>
          </Link>
        </div>
        <div className="grow"></div>

        <div className=" pr-5 pt-5 text-xl w-60">
          <Link to="/blog">
            <span className="float-left pr-2 hover:text-stone-500 cursor-pointer lg:border-r">
              Blog
            </span>
          </Link>
          <Link to="/events">
            <span className="float-left pl-2 pr-2 hover:text-stone-500 cursor-pointer lg:border-r">
              Events
            </span>
          </Link>

          <span
            className="float-left pl-2 pr-2 hover:text-stone-500 cursor-pointer lg:border-r"
            onClick={() => setContactModal(true)}
          >
            Contact
            <Modal
              comp={<Contact />}
              openModal={openContactModal}
              onCloseClick={() => setContactModal(false)}
            ></Modal>
          </span>

          <div>
            <span className="float-left pl-2 pr-2 hover:text-stone-500 cursor-pointer">
              <FaUserAlt></FaUserAlt>
              <span
                className="float-right hover:text-stone-500 cursor-pointer"
                onClick={() => setOpenLoginModal(true)}
              >
                Sign in
              </span>
            </span>

            <Modal
              comp={<Login />}
              openModal={openLoginModal}
              onCloseClick={() => setOpenLoginModal(false)}
            ></Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
