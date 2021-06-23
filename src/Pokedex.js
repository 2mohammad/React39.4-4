import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({list}) => {
    return (
        <>
        <div>
            {list.map( item => (
                <Pokecard key={item.id} name={item.name} type={item.type} base_experience={item.base_experience} />
            ))}
        </div>
        </>
    )
}

export default Pokedex