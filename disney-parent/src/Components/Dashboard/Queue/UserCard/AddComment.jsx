import React, { useState } from 'react';
import { Field, withFormik, Form } from 'formik';
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
    
    return (
        <div>
            <Form>
                <Field
                    type="text" 
                    name="body" 
                    placeholder="Type Here"
                />
                <button type="submit">Submit Comment</button>
            </Form>
        </div>
    )
}



export default withFormik({
    mapPropsToValues: (values) => {
        return {
            body: values.body || ''
        }
    },
    handleSubmit: (values, { setStatus, setSubmitting, requestID }) => {
        API.post("/comments", {request_id: requestID, body: values.body})
        .then((res) => {
            console.log(res)
        })
    }
    
})(Comment)
