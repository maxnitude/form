import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { addedEmail } from '../actions/index';
import { useForm }  from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MainContainer from './MainContainer';
import { Form } from './Form';
import { Input } from './Input';
import { ControlButton } from './Button';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should be correct") 
        .required("Email is a required field") 
});

const Step1Form = ({ addedEmail, email }) => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }  } = useForm({
        defaultValues: { email: email },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        history.push("/step3")
    }

    // const prev = () => {
    //     history.push("/")
    // }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Enter your Email</Typography>
            <Form onSubmit = {handleSubmit(onSubmit)} > 
                <Input
                    {...register('email')}
                    type="email"
                    label="Email"
                    name="email"
                    required
                    onChange={(e) => addedEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors?.email?.message} 
                />
                {/* <ControlButton onClick={prev} >Previous</ControlButton> */}
                <ControlButton>Next</ControlButton>
            </Form>
        </MainContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        email: state.email,
    }
}

const mapDispatchToProps = {
    addedEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1Form);