import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { primary1 } from '../Styles';
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
    const SignupText = styled.div`
        margin-top: 10px;
    `



const Login = (props) => {
    const [values, setValues] = useState([]);
    const pageHistory = () => {
        props.history.push('/dashboard')
    }

    useEffect(() => {
        if (props.status) {
        setValues([...values, props.status])
        pageHistory();
    }},[props.status])

    return (
        
            <Form style={{
                display: 'flex',
                flexFlow: 'Column Wrap',
                alignContent: 'center',
                }}>
                <Wrapper>
                    <Input type="text" name="username" placeholder="Username" />

                    <Input type="password" name="password" placeholder="Password" />
                    <SubmitButton type="submit">Login</SubmitButton>
                    <SignupText>
                        <Link to='/signup' style={{color: 'white'}}>Don't have an account? Signup now!</Link>
                    </SignupText>
                </Wrapper>
            </Form>
        
        
    )
}

export default withFormik({
    
    mapPropsToValues: (values) => {
        return {
            username: values.username || '',
            password: values.password || ''
        }
    },

    // validationSchema: yup.object().shape({
    //     username: yup.string().required('Username is required'),
    //     password: yup.string().required('Password is required')
    // }),

    handleSubmit: (values, { setStatus }) => {
        const {username, password } = values;

        API
        .post("/accounts/login", { username, password })
        .then(response => {
            localStorage.setItem("token", response.data.token);
            console.log("Token set!")
            setStatus(false);
        })
        .catch(error => console.log(error.response.data));
    }
    
})(Login);

