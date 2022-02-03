import React, { useCallback, useState } from 'react';
import banner from '../assets/images/travel.jpg'
import { Button } from './Button';
import Card from './Card';


export default function Events() {
    const categories = ["Near You", "Honeymoon", "Party", "Solo", "Up Comming", "Friends", "Trekking"]
    const [activeId, setActiveId] = useState(null);

    const setActive = useCallback((event, id) => {
        console.log(event.target, id)
        setActiveId(id);
    }, [])

    return <div>
        <div className='w-full container mx-auto '>
            <img src={banner} alt="bannerImg" className='h-96 w-full container mx-auto '></img>
            <h1 class="text-3xl ">Events in Vadodara</h1>
            {categories.map((cat, idx) => {
                return <Button key={"button-" + idx} usere
                    className={'rounded-xl  ' + activeId && activeId === idx + 1 && 'active'}
                    onClick={(e) => setActive(e, idx + 1)}
                >{cat}</Button>
            })}
            <div className="container mx-auto relative grid grid-cols-4">
                {[...Array(8)].map((elem, idx) => {
                    return <Card key={idx} name={elem}></Card>
                })}
            </div>
        </div>
    </div>;
}
