import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function SwitchUser() {

    const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    `

    return (
        <StyledLink>
            <Link to='/dashboard'>User</Link>
            <Link to='/volunteer-dashboard'>Volunteer</Link>
        </StyledLink>
        
        
    )
}

export default SwitchUser;