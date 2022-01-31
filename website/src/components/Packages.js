import React from 'react';
import { Button } from './Button';
import Card from './Card';

export default function Packages() {
    return (
        <div>
            <div className="">
            <div className="container">
                <Button className=" text-xl active">Near You</Button>
                <Button className=" text-xl">Honeymoon</Button>
                <Button className=" text-xl">Party</Button>
                <Button className=" text-xl">Solo</Button>
                <Button className=" text-xl">Up Comming</Button>
                <Button className=" text-xl">Friends</Button>
                <Button className=" text-xl">Trekking</Button>
            </div>
            </div>
            <div className="container mx-auto relative grid md:grid-cols-2 lg:grid-cols-4">
                {[...Array(8)].map((elem,idx) => {
                  return  <Card key={idx} name={elem}></Card>
                })}
            </div>
        </div>
    )
}
