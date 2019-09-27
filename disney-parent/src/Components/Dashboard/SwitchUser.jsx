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
            <button>
                <Link to='/volunteer-dashboard'>Add a Volunteer</Link>
            </button>
        </styledLink>
        
        
    )
}

export default SwitchUser;