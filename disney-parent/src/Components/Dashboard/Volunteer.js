import React from 'react';
import styled from 'styled-components';
import SwitchUser from './SwitchUser';
import { Field, withFormik, Form } from 'formik';
import { primary1 } from './Styles';
import * as yup from 'yup';

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
    isSubmitting
}) => {
    return(
        <>
        <SwitchUser style={{display: "flex", justifyContent: "flex-end"}} />
        <Form>
            <Div>
            <div>
                <h2>Please fill out form to be a volunteer!</h2>
                <div>
                    <label>
                        *Name: 
                        {  touched.name && errors.name && <p>{errors.name}</p> }
                        <Field type="text" name="name" placeholder='Enter Name' />
                    </label>
                </div>
                <div>
                    <label>
                        *Email: 
                        { touched.email && errors.email && <p>{errors.email}</p> }
                        <Field type="email" name="email" placeholder="Email" />
                    </label>
                </div>
                <label>
                    <Field type="checkbox" name="childcare" checked={values.childcare} />
                    Childcare
                </label>
                <label>
                    <Field type="checkbox" name="stroller" checked={values.stroller}  />
                    Stroller
                </label>
            </div>
            <div>
                
                <label>
                        <Field type="checkbox" name="magicKingdom" checked={values.magicKingdom} />
                        Magic Kingdom
                </label>
                <label>
                        <Field type="checkbox" name="animalKingdom" checked={values.animalKingdom} />
                        Animal Kingdom
                </label>
                <label>
                        <Field type="checkbox" name="epcot" checked={values.epcot} />
                        Epcot
                </label>
                <label>
                        <Field type="checkbox" name="hollywood" checked={values.hollywoood} />
                        Hollywood Studios
                </label>
            </div>
            <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
            </Div>
        </Form>
        </>
    )
} 

const Vform = withFormik({
    mapPropsToValues(){
        return{
            name:'',
            email: '',
            childcare: false,
            stroller: false,
            animalKingdom: false,
            magicKingdom: false,
            epcot: false,
            hollywood: false,
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Valid Email Please').required(''),
    }),
})(VolunteerForm)

export default Vform