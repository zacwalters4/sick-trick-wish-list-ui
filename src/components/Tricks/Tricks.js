import React from 'react'
import './Tricks.css'
import Tile from '../Tile/Tile'

const Tricks = ({tricks}) => {
    
    const trickTiles = tricks.map(trick => {
        return (
            <Tile
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
            />
        )
    })

    return (
        <div className='tricks-box'>
            {trickTiles}
        </div>
    )
}

export default Tricks