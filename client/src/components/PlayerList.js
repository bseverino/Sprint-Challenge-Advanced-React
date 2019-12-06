import React from 'react';

import PlayerCard from './PlayerCard'

function PlayerList(props) {
    return (
        <div className='card-container'>
            {props.players.map(player => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};

export default PlayerList;