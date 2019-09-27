import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 4rem;
    font-weight: 300;
    text-align: center;
    transition: all .3s;
    color: white;
    
    :hover {
        color: lightblue;
        transform: scale(1.1);
    }
`


export default function Welcome() {
    return (
        <section>
            <header>
                <Link to='/'>
                    <Title>Disney Parent</Title>
                </Link>
            </header>
        </section>
    );
}