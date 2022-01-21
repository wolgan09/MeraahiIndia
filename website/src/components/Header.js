import React from 'react';
import logo from '../logo.svg';
import { Button } from './Button';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div>
            <div className="flex flex-row sticky">
                <div className="basis-1/4 my-1.5">
                    <img className="h-10 float-left" alt="logo" src={logo} ></img>
                    <span className="absolute top-3 text-2xl">Meraahi India</span>
                </div>
                <div className="grow"></div>

                <div className="shrink pr-5 pt-5 text-xl w-60">
                    <Link to="/blog"><span className="float-left pr-2 hover:text-stone-500 cursor-pointer lg:border-r">Blog</span></Link>
                    <Link to="/events"><span className="float-left pl-2 pr-2 hover:text-stone-500 cursor-pointer lg:border-r">Events</span></Link>
                    <div>
                        <span className="float-left pl-2 pr-2 pt-0.5 hover:text-stone-500 cursor-pointer">
                            <FaUserAlt></FaUserAlt>
                        </span>
                        <span className="float-right hover:text-stone-500 cursor-pointer">Sign in</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
