import React from 'react';
import styled from 'styled-components';
import { Button } from "semantic-ui-react";


const ParkBtn = styled.button`
    background: none;
    border: none;
    font-size: 1.2rem;
    transition: all .3s;
    cursor: pointer;
    padding-bottom: 10px;
    color: white;

    :hover {
        transform: scale(1.1);
        border-bottom: 1px solid lightblue;
        color: lightblue;
    }
`


function Parks(props) {
    const showText = props.text
    
        return (
            <div>
                <Button.Group>
                    <ParkBtn onClick={() => props.setParkState(showText)}>{showText}</ParkBtn>
                </Button.Group>
            </div>
            
        )
    }


export default Parks;