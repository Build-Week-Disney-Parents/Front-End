import React, { useEffect } from 'react';
import styled from 'styled-components';
import SwitchUser from './SwitchUser';
import { Field, withFormik, Form } from 'formik';
import { primary1 } from '../Styles';
import * as yup from 'yup';
import API from '../../Utilities/API';
import { Link } from 'react-router-dom'

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

const Wrapper = styled.div`
        width: 400px;
        text-align: center;
        margin: 0 auto;
    `
const SubmitButton = styled.button`
        padding: 10px 0;
        width: 60%;
        text-align: center;
        align-self: flex-start;
        background: ${primary1};
        color: white;
        border: none;
        font-size: 1.2rem;
        margin-top: 10px;
        border-radius: 10px;
    `



const VolunteerForm = (props) => {
    const forward = () => props.history.push('/dashboard');
    console.log(props.status)
    useEffect(() => {
        if (props.status) {
        forward();
    }},[props.status])





    return(
        <>
        <button>
            <Link to='/dashboard'>Back to User</Link>
        </button>
        <Form>
            <Wrapper>
                <div>
                    <h2 style={{color: 'white'}}>Got a pass up for grabs? Share with other parents!</h2>
                    <div style={{color: 'white'}}>
                        Name: 
                        <Input type="text" name="title" placeholder="title" />
                    </div>
                    <div style={{color: 'white'}}>
                        Select a Pass: 
                        <Field component="select" name="request_type">
                            <option value="" disabled>Select Type:</option>
                            <option value="stroller">Stroller</option>
                            <option value="childcare">Childcare</option>
                        </Field>
                    </div>
                    <div style={{color: 'white'}}>
                        Select a Park: 
                        <Field component="select" name="location">
                            <option value="" disabled>Select Park:</option>
                            <option value="All Parks">All Parks</option>
                            <option value="Magic Kingdom">Magic Kingdom</option>
                            <option value="Animal Kingdom">Animal Kingdom</option>
                            <option value="Hollywood Studios">Hollywood Studios</option>
                            <option value="Epcot">Epcot</option>
                        </Field>
                    </div>
                </div>
                <div style={{color: 'white'}}>
                        Meeting: 
                        <Input type="text" name="meeting_time"  placeholder='Meeting Time'/>
                </div>
                <SubmitButton disabled={props.isSubmitting}>Submit</SubmitButton>
            </Wrapper>
        </Form>
        </>
    )
} 

const Vform = withFormik({
    mapPropsToValues: (values) => {
        return{
            title: values.title || '',
            request_type: values.request_type || '',
            location: values.location || '',
            meeting_time: values.meeting_time || ''
        }
    },
    // validationSchema: yup.object().shape({
    //     name: yup.string().required('Name is required'),
    //     email: yup.string().email('Valid Email Please').required(''),
    // }),
    handleSubmit: (values, { setStatus, setSubmitting, resetForm }) => {
        API.post('/requests', values)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            setStatus(res.data)
            console.log(res)
            setSubmitting(false);
            resetForm();
        })
        .catch((err) => {
            console.log(err)
        })
    }
})(VolunteerForm)

export default Vform