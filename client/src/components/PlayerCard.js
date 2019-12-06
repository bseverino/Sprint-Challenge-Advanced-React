import React from 'react';

function PlayerCard(props) {
    return (
        <div aria-labelledby="player-card" className={'card'}>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    );
};

export default PlayerCard;