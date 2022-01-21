import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import data from '../assets/cities.json'

export default function Search(props) {
    console.log(props)
    //Emit seached city on searched = true;
    const [cities, setCities] = useState(null);
    const inputEl = useRef(null);
    const searchKeyword = (event) => {
        const searchText = event.target.value;
        if (searchText.length === 0) { return setCities(data) }
        if (searchText.length > 3) {
            console.log(searchText)
            const citiesList = data.filter((city) => {
                return city.name.toLowerCase().includes(searchText)
            });
            setCities(citiesList)
        }
    }

    const setInputValueHandler = (city) => {
        console.log(city.target.innerText)
        inputEl.current.value = city.target.innerText;
    }

    return (
        <div>
            <input ref={inputEl} type="search" onChange={searchKeyword} className="border-2 border-solid border-zinc-900 p-4" placeholder="Any Places in you mind?" />
            {cities && cities.length &&
                <div className="search-box h-36 absolute bg-white w-56" style={{ overflow: "scroll" }}>
                    {cities.map((city) =>
                        // <Link to={'/places/' + city.name.toLowerCase()}><p className='hover:text-pink-300 hover:font-bold cursor-pointer'>{city.name}</p></Link>
                        <p key={city.id} onClick={setInputValueHandler} className='hover:text-pink-300 hover:font-bold cursor-pointer'>{city.name}</p>
                    )}
                </div>}
        </div>
    )
}
