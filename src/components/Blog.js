import React, { useCallback, useState } from 'react';
import banner from '../assets/images/travel.jpg'
import { Button } from './Button';
import Card from './Card';

export default function Blog() {
  const categories = ["Near You", "Honeymoon","Party","Solo","Up Comming","Friends","Trekking"]
  const [activeId, setActiveId] = useState(null);

  const setActive = useCallback((event,id) => {
    console.log(event.target,id)
    setActiveId(id);
},[])

  return <div>
      <img  src={banner} alt="bannerImg" className='h-96 w-full container mx-auto '></img>
      <div className='container mx-auto'>
      <h1 class="text-3xl">Get - Set - Travel! </h1>   
      <p class="text-md text-stone-400">26 January 2022</p>   
      <p className='p-5'>
      Love garlic? You’ll love the food in Pune. Unlike other cuisines of the subcontinent, Pune cuisine relies heavily on the aromatic bulb. Soothe your palate with sweets like bhakarwadi, a pastry rolled with coriander, tamarind and sesame seeds, or cool off with a thick milkshake made with dried fruit.
      </p>

      </div>
  </div>;
}
