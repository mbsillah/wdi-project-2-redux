import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = (props) => {
    return (
        <Link to={`/player/${props.player._id}`}>
           <img src={props.player.img} alt={props.player.firstName}/> 
        </Link>
    );
};

export default PlayerCard;