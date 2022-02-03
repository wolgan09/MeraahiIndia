import React, { useCallback, useRef, useState } from 'react';
import { Button } from './Button';
import Card from './Card';

export default function Packages() {

    const categories = ["Near You", "Honeymoon","Party","Solo","Up Comming","Friends","Trekking"]
    const [activeId, setActiveId] = useState(null);
    // const buttonEl = useRef(null);
    const setActive = useCallback((event,id) => {
            console.log(event.target,id)
            setActiveId(id);
    },[])

    return (
        <div>
            <div className="container mx-auto">
            <div className="">
                {categories.map((cat,idx) => {
                return <Button key={"button-" + idx} usere
                 className={activeId && activeId === idx+1 && 'active'} 
                onClick={(e) => setActive(e,idx+1)}
                >{cat}</Button>
                })}
                {/* <Button className="text-2xl" onClick={setActive}>Near You</Button>
                <Button className=" text-xl">Honeymoon</Button>
                <Button className=" text-xl">Party</Button>
                <Button className=" text-xl">Solo</Button>
                <Button className=" text-xl">Up Comming</Button>
                <Button className=" text-xl">Friends</Button>
                <Button className=" text-xl">Trekking</Button> */}
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
