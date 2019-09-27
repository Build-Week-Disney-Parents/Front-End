import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, withFormik, Form } from 'formik';
import { primary1 } from '../../../Styles';
import * as yup from 'yup';
import API from '../../../../Utilities/API';

function Comment (props) {
    const [comment, setComment] = useState({
                                    message: ''
    })

    const onChange = (e) => {
        setComment({[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addMessage(comment.message);
        setComment({message: ''});

    }
    console.log(props)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="message" 
                    placeholder="Type Here"
                    value={comment.message}
                    onChange={onChange} />

                <button type="submit">Submit Comment</button>
            </form>
        </div>
    )
}



export default Comment
