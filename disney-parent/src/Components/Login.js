import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { primary1 } from './Styles';



const Login = ({ errors, touched, status }) => {
    const [values, setValues] = useState([]);

    const Wrapper = styled.div`
        width: 400px;
        text-align: center;
        margin: 0 auto;
    `
    const Title = styled.h1`
        font-size: 3rem;
        font-weight: 300;
    `
    const SubmitButton = styled.button`
        padding: 10px 0;
        width: 100%;
        text-align: center;
        align-self: flex-start;
        background: ${primary1};
        color: white;
        font-size: 1.2rem;
        margin-top: 10px;
        border-radius: 10px;
    `
    const Input = styled.input`
        align-self: flex-start;
        width: 97%;
        margin-top: 10px;
        padding: 10px 5px;
        font-size: 1.2rem;
        background: transparent;
        border: 1px solid black;
        border-radius: 10px;
        color: black;
    `
    const SignupText = styled.div`
        margin-top: 10px;
    `


    

    return (
        <Wrapper>
            <Form style={{
                display: 'flex',
                flexFlow: 'Column Wrap',
                alignContent: 'center',
                }}>
                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Input type='email' name='email' placeholder='Email' />

                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Input type='password' name='password' placeholder='Password' />

                <label style={{marginTop: '10px', alignSelf: 'flex-start'}}>
                    <Field type='checkbox' name='remember' />
                    <span style={{fontSize: '.8rem'}}>Remember Me?</span>
                </label>
                <Link to='/dashboard' className='loginBtn'>Login</Link>
                <SignupText>
                    <Link to='/signup'>Don't have an account? Signup now!</Link>
                </SignupText>
            </Form>
        </Wrapper>
        
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            email: values.email || '',
            password: values.password || '',
            remember: values.rememer || false
        }
    },
    validationSchema: yup.object().shape({
        email: yup.string().required('Email is required!'),
        password: yup.string().required('Password is required!')
    }),
    handleSubmit: (values, { setStatus }) => {
        console.log('Submitted Email:', values.email);
        console.log('Submitted Password:', values.password)
        setTimeout(() => setStatus(false), 3000)
    }
    
})(Login);