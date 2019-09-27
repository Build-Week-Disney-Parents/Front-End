import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import API from '../../Utilities/API';


const Wrapper = styled.div`
        width: 400px;
        text-align: center;
        margin: 0 auto;
    `
    const Title = styled.h1`
        font-size: 3rem;
        font-weight: 300;
    `
    const Input = styled(Field)`
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

const Signup = ({ errors, touched, status }) => {
    const [values, setValues] = useState([])

    

    return (
        <Wrapper>
            <Title>Signup</Title>
            <Form style={{
                display: 'flex',
                flexFlow: 'Column Wrap',
                alignContent: 'center',
            }}>
                {/* {touched.first && errors.first && <p className='error'>{errors.first}</p>}
                <Input type='text' name='first' placeholder='First Name' />

                {touched.last && errors.last && <p className='error'>{errors.last}</p>}
                <Input type='text' name='last' placeholder='Last Name' />

                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Input type='email' name='email' placeholder='Email' /> */}
                <Input type='text' name='username' placeholder='Username' /> 
                <Input type='text' name='full_name' placeholder='Full Name' /> 

                {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                <Input type='password' name='password' placeholder='Password' />

                <Link to='/' className='loginBtn'>Signup</Link>
            </Form>
        </Wrapper>
        
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            // first: values.first || '',
            // last: values.last || '',
            username: values.username || '',
            full_name: values.full_name || '',
            password: values.password || ''
        }
    },
    // validationSchema: yup.object().shape({
    //     first: yup.string().required('First name is required!'),
    //     last: yup.string().required('Last name is required!'),
    //     email: yup.string().required('Email is required!'),
    //     password: yup.string().required('Password is required!')
    // }),
    handleSubmit: (values, { setStatus }) => {
        const {username, password, full_name } = values;

        API
        .post("/accounts/register", { username, password, full_name })
        .then(response => {
            localStorage.setItem("token", response.data.token);
            console.log("Token set!")
            setStatus(false);
        })
        .catch(error => console.log(error));
    }
    
})(Signup);