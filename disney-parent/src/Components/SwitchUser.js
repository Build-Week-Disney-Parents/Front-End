import React from 'react';
import { Link } from 'react-router-dom';


function SwitchUser() {
    return (
        <>
            <Link to='/user-dashboard'>User</Link>
            <Link to='/volunteer-dashboard'>Volunteer</Link>
        </>
        
    )
}

export default SwitchUser;