import React from 'react';

//styles
import './topbutton.scss';

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id:1,
            title:'Tehran',
        },
        {
            id:2,
            title:'Paris',
        },
        {
            id:3,
            title:'Toronto',
        },
        {
            id:4,
            title:'New york',
        },
        {
            id:5,
            title:'Sydney',
        },
    ]
    return (
        <div className='nav'>
            {
                cities.map((city)=> (
                    <button className='nav-btn' key={city.id} onClick={() => setQuery({ q: city.title })}>{city.title}</button>
                ))
            }
        </div>
    );
};

export default TopButtons;