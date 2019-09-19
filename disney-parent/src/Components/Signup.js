import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const Signup = ({ errors, touched, status }) => {
    const [values, setValues] = useState([])

    const Wrapper = styled.div`
        width: 100%;
        text-align: center;
    `

    return (
        <Wrapper>
            <h1>Signup</h1>
            <Form>
                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Field type='email' name='email' placeholder='Email' />

                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Field type='password' name='password' placeholder='Password' />

                <button type='submit'>Submit</button>
            </Form>
        </Wrapper>
        
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            email: values.email || '',
            password: values.password || ''
        }
    },
    validationSchema: yup.object().shape({
        email: yup.string().required('Email is required!'),
        password: yup.string().required('Password is required!')
    }),
    handleSubmit: (values, { setStatus }) => {
        console.log('Email is', values.email)
        console.log('Password is', values.password)
    }
    
})(Signup);