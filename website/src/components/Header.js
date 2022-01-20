import React from 'react';
import logo from '../logo.svg';
import { Button } from './Button';
import { FaUserAlt } from 'react-icons/fa';


export default function Header() {
    return (
        <div>
            <div className="flex sticky">
                <div className="flex-2 my-1.5">
                    <img className="h-10 float-left" alt="logo" src={logo} ></img>
                    <span className="absolute top-3 text-2xl">Meraahi India</span>
                </div>
                <div className="flex-auto">

                </div>
                <div className="flex-3 pr-5 pt-5 text-xl">
                <div className="cursor-pointer hover:text-stone-500">
                    <span className="float-left pr-2 pt-0.5"><FaUserAlt></FaUserAlt></span> <span>Sign in</span>
                </div>
                </div>
            </div>

        </div>
    )
}
