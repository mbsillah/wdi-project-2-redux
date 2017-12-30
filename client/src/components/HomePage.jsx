import React from 'react';
import PlayerList from './PlayerList'

const HomePage = () => {
    return (
        <div>
            <h1>The Georgia UMvC3 Player Database</h1>
            <PlayerList />
            <a href="/new">New Player</a>
        </div>
    );
};

export default HomePage;