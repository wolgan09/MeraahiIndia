import React from 'react';
import logo from '../logo.svg';
import { Button } from './Button';


export default function Header() {
    return (
        <div>
            <div className="flex">
                <div className="flex-2 my-1.5">
                    <img className="h-10 float-left" alt="logo" src={logo} ></img>
                    <span className="absolute top-5">Meraahi India</span>
                </div>
                <div className="flex-auto">

                </div>
                <div className="text-xl flex-4">
                    <Button primary>Sign in</Button>
                </div>
            </div>

        </div>
    )
}
