import React from 'react';
import image from '../assets/images/travel.jpg'
import { Button } from './Button';
import Search from './Search';

const mystyle = {
    backgroundImage: "url(" + image + ")",
};

export default function Body() {
    return (
        <div className="">
            <img src={image} alt="landing" style={{position:'fixed'}} ></img>
            <div className="wrapper mt-1.5">
                <div className="top-10 max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 relative">
                    <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                        Start travelling with us
                    </h2>
                    <div classNameName="mt-8 flex justify-center">
                        <Search></Search>
                        <Button >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
