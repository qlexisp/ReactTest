import React, { useState } from 'react';

export default function MyComposent() {

    const [car, setCar] = useState({ year: 2024, make: "Ford", model: "Mustang" });

    function handleYear(event) {
        setCar(c => ({...c, year: event.target.value }));
    }

    function handleMake(event) {
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModel(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your favorite is: {car.year}, {car.make}, {car.model}</p>
            <input type="number" value={car.year} onChange={handleYear} /><br />
            <input type="text" value={car.make} onChange={handleMake} /><br />
            <input type="text" value={car.model} onChange={handleModel} /><br />
        </div>
    );
}