import React from 'react';
import typeColors from '../../helpers/typeColors'

function Card({ pokemon }) {
    return (

<div className="Card">
     <div className="card-content">
        <div className="pokemon-name">
            <p>{pokemon.name}</p>
        </div>
        <div className="pokemon-image">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="Card__info">
            <div className="Card__data Card__data--weight">
                <p><strong>Weight: </strong>{pokemon.weight} in hectograms</p>
            </div>
            <div className="Card__data Card__data--weight">
                <p><strong>Height: </strong>{pokemon.height} in decimetres</p>
            </div>
            <div className="Card__data Card__data--ability">
                <p><strong>Ability: </strong>{pokemon.abilities[0].ability.name}</p>
            </div>   
            <div className="Card__data Card__data">
                <p><strong>Exp. Gain: </strong>{pokemon.base_experience}</p>
            </div>
        </div>        
        <div className="Card__types">
            {
                pokemon.types.map(type => {
                    return (
                        <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })
            }
        </div>

    </div>
           
</div>

    );
}

export default Card;
