import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 300;
    text-align: center;
`


export default function Welcome() {
    return (
        <section>
            <header>
                <Title>Disney Parent</Title>
            </header>
        </section>
    );
}