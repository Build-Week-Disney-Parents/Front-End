import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { primary1 } from './Styles';



const Login = ({ errors, touched, status }) => {
    const [values, setValues] = useState([]);

    const Wrapper = styled.div`
        width: 100%;
        text-align: center;
    `
    const Title = styled.h1`
        font-size: 3rem;
        font-weight: 300;
    `
    const SubmitButton = styled.button`
        padding: 10px 80px;
        text-align: center;
        align-self: flex-start;
        background: ${primary1};
        color: white;
        font-size: 1.2rem;
        margin-top: 10px;
    `

    return (
        <Wrapper>
            <Title>Login</Title>
            <Form style={{
                display: 'flex',
                flexFlow: 'Column Wrap',
                alignContent: 'center',
                }}>
                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Field type='email' name='email' placeholder='Email' style={{alignSelf: 'flex-start'}} />

                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Field type='password' name='password' placeholder='Password' style={{alignSelf: 'flex-start'}} />

                <SubmitButton type='submit' style={{alignSelf: 'flex-start'}}>Submit</SubmitButton>
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
    
})(Login);