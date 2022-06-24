import React from 'react'

const CardPokemon = ({id, image, name }) => {
    
    return (
        <div key={id} className="thumb-container">
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <br />
                <small>{name}</small>
                <hr />
            </div>
        </div>
    )
}

export default CardPokemon