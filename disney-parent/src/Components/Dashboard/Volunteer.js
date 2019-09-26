import React from 'react';
import styled from 'styled-components';
import SwitchUser from './SwitchUser';
import { Field, withFormik, Form } from 'formik';
import { primary1 } from '../Styles';
import * as yup from 'yup';
import API from '../../Utilities/API';

const Input = styled.input`
        align-self: flex-start;
        width: 97%;
        margin-top: 10px;
        padding: 10px 5px;
        font-size: 1.2rem;
        background: transparent;
        border: 1px solid white;
        border-radius: 10px;
        color: black;
    `

const Div = styled.div`
        text-align: center;
        background: rgba(255,255,255,0.3);
        width: 65%;
        border-radius: 10px;
        margin: 0 auto;
    
`
const SubmitButton = styled.button`
        padding: 10px 0;
        width: 60%;
        text-align: center;
        align-self: flex-start;
        background: ${primary1};
        color: white;
        font-size: 1.2rem;
        margin-top: 10px;
        border-radius: 10px;
    `


const VolunteerForm = ({
    values,
    errors,
    touched,
    isSubmitting,

}) => {
    return(
        <>
        <SwitchUser style={{display: "flex", justifyContent: "flex-end"}} />
        <Form>
            <Div>
                <div>
                    <h2>Please fill out form to be a volunteer!</h2>
                    <div>
                        <Field type="text" name="title" placeholder="title" />
                    </div>
                    <div>
                        <Field component="select" name="request_type">
                            <option value="" disabled>Select Type:</option>
                            <option value="stroller">Stroller</option>
                            <option value="childcare">Childcare</option>
                        </Field>
                    </div>
                </div>
                <div>
                        <Field type="text" name="location"  placeholder='Location'/>
                </div>
                <div>
                        <Field type="text" name="meeting_time"  placeholder='Meeting Time'/>
                </div>
                <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            </Div>
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
    handleSubmit: (values, { setStatus }) => {
        API.post('/requests', values)
        .then((res) => {
            setStatus(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
})(VolunteerForm)

export default Vform