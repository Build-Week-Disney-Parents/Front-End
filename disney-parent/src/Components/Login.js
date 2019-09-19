import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';

const Login = () => {
    return (
        <div>

        </div>
    )
}

export default withFormik({
    handleSubmit: (values, { setSubmitting }) => {
        console.log('submitted Email:', values.email)
        console.log('submitted password:', values.password)
        setTimeout(() => setSubmitting(false, 3 * 1000))
    },
    validationSchema: LoginValidation,
})(Login);