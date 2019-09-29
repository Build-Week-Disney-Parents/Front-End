import React, { useState, useEffect } from 'react';
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
        color: white;
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

    const SubmitButton = styled.button`
        padding: 10px 0;
        width: 100%;
        text-align: center;
        align-self: flex-start;
        background: dodgerblue;
        border: none;
        color: white;
        font-size: 1.2rem;
        margin-top: 10px;
        border-radius: 10px;
        transition: all .3s ease-in-out;

        :hover {
            transform: scale(1.1);
        }
    `

const Signup = (props) => {
    const [values, setValues] = useState([])

    const pageHistory = () => {
        props.history.push('/dashboard')
    }

    useEffect(() => {
        if (props.status) {
        setValues([...values, props.status])
        pageHistory();
    }},[props.status])

    

    return (
        <Wrapper>
            <Title>Signup</Title>
            <Form style={{
                display: 'flex',
                flexFlow: 'Column Wrap',
                alignContent: 'center',
            }}>
                <Input type='text' name='username' placeholder='Username' /> 
                <Input type='text' name='full_name' placeholder='Full Name' /> 

                <Input type='password' name='password' placeholder='Password' />

                <SubmitButton type="submit">Signup</SubmitButton>
            </Form>
        </Wrapper>
        
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
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
    handleSubmit: (values, { setStatus, setSubmitting, resetForm }) => {
        const {username, password, full_name } = values;

        API
        .post("/accounts/register", { username, password, full_name })
        .then(response => {
            localStorage.setItem("token", response.data.token);
            console.log("Token set!");
            setStatus(response.data);
            setSubmitting(false);
            resetForm();
        })
        .catch(error => console.log(error));
    }
    
})(Signup);