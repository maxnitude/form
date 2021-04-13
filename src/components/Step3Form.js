import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { addedPassword} from '../actions/index';
import { useForm }  from 'react-hook-form';
import MainContainer from './MainContainer';
import { Form } from './Form';
import { Input } from './Input';
import { ControlButton } from './Button';
import { useHistory } from 'react-router';

const Step1Form = ({ addedPassword, password }) => {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors }  } = useForm({
        defaultValues: { password: password },
        mode: "all",
    });

    const onSubmit = () => {
        history.push("/endpage")
    }

    const checkData = () => {
        history.push("/")
    }

    const [isPassword, setIsPassword] = useState(false);
    const [isButton, setIsButton] = useState(false);

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Pick a password</Typography>
            <Form onSubmit = {handleSubmit(onSubmit)} > 
                <Input
                    {...register('password')}
                    type="password"
                    label="Password"
                    name="password"
                    onInput={(e) => addedPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors?.password?.message} 
                />
                 <Input
                    {...register('repeatPassword')}
                    type="password"
                    label="Repeat password"
                    name="repeatPassword"
                    onChange={(e) => {
                        if (e.target.value !== password) {
                            setIsPassword(true);
                            setIsButton(false)
                        } else  {
                            setIsPassword(false);
                            setIsButton(!isButton)
                        }
                    }}
                    error={isPassword}
                    helperText={isPassword ? "Password mismatch" : null}
                />
                <ControlButton disabled={!isButton}>Register</ControlButton>
                <ControlButton onClick = {handleSubmit(checkData)}>Сheck data</ControlButton>
            </Form>
        </MainContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        password: state.password
    }
}

const mapDispatchToProps = {
    addedPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1Form);