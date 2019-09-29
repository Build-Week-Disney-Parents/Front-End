import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Styles, { primary1 } from '../Styles';


function SwitchUser() {

    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s ease-in-out;
        background: ${primary1};
        height: 50px;
        width: 200px;
        border-radius: 10px;

        :hover {
            transform: scale(1.1)
        }
    `
    const StyledLink = styled(Link)`
        font-size: 1.2rem;
        color: white;

        :hover {
            color: white;
        }
    `

    return (
        <StyledDiv>
                <StyledLink to='/volunteer-dashboard'>Add a Volunteer</StyledLink>
        </StyledDiv>
        
        
    )
}

export default SwitchUser;