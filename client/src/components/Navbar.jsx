import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div> 
            <Link to="/"><p>GA Marvel 3</p></Link>
            <p>GA MVCI</p>
        </div>
    );
};

export default Navbar;