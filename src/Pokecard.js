import React from 'react';

const Pokecard = ({id, name, type, base_experience}) => 
 {
     return (
    <>
    <div>
    <h3>{name}</h3>
    <p>Type: {type}</p>
    <p>EXP: {base_experience}</p>
    </div>
    </>
)}

export default Pokecard;