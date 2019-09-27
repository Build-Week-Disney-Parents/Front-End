import React from 'react';
import styled from 'styled-components';
import { Field, withFormik, Form } from 'formik';
import { primary1 } from '../../Styles';
import * as yup from 'yup';
import API from '../../../Utilities/API';

function AddComment({ values, errors, touched, isSubmitting, users }) {
    return (
        <div>
            <Form>
                {/* <h1>{`${users.username} says: `}</h1> */}
                <Field type="text" name="comment" placeholder="Type Here" />
                <button type="submit">Submit Comment</button>
            </Form>
        </div>
    )
}

const Comment = withFormik({
    mapPropsToValues: (values) => {
        return {
            comment: values.comment || ''
        }
    },
    handleSubmit: (values, { setStatus }) => {
        API.post('api here', values)
        .then((res) => {
            setStatus(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log('Error:', err)
        })
    }
})(AddComment)

export default Comment
