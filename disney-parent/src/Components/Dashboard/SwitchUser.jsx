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
            <button>
                <Link to='/volunteer-dashboard'>Add a Volunteer</Link>
            </button>
        </StyledLink>
        
        
    )
}

export default SwitchUser;