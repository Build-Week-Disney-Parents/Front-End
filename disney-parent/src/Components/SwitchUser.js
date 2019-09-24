import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function SwitchUser() {

    const styledLink = styled.div`
    display: flex;
    justify-content: center;
    `

    return (
        <styledLink>
            <Link to='/user-dashboard'>User</Link>
            <Link to='/volunteer-dashboard'>Volunteer</Link>
        </styledLink>
        
        
    )
}

export default SwitchUser;