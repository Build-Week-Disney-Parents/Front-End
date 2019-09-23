import React from 'react';
import styled from 'styled-components';
import SwitchUser from './SwitchUser';

const Input = styled.input`
        align-self: flex-start;
        width: 97%;
        margin-top: 10px;
        padding: 10px 5px;
        font-size: 1.2rem;
        background: transparent;
        border: 1px solid white;
        border-radius: 10px;
        color: white;
    `


function Volunteer() {





    return (
        <div>
            <SwitchUser />
            <form>
                <Input type="text" placeholder='Type of service'/>
            </form>
        </div>
    )
}

export default Volunteer