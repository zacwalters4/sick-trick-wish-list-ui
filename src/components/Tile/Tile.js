import React from 'react'
import './Tile.css'

const Tile = ({stance, name, obstacle, tutorial}) => {
    return (
        <div className='tile'>
            <h3>{stance + ' ' + name}</h3>
            <h3>{`Obstacle: ${obstacle}`}</h3>
            <h3>Link to Tutorial:</h3>
            <h3><a href="#">{tutorial}</a></h3>
        </div>

    )
}

export default Tile