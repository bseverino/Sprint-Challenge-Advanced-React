import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

import PlayerCard from './PlayerCard'

function PlayerList(props) {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <button  data-testid="toggle-button" className='toggle' onClick={toggleMode}>
                {darkMode ? '🌞' : '🌚'}
            </button>
            <div  data-testid="player-list" className='card-container'>
                {props.players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
};

export default PlayerList;