import React from 'react';
import { Typography, TextField } from '@material-ui/core';
// import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addedName, addedSurname, addedPatronymic, addedBirthday, check } from '../actions/index';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MainContainer from './MainContainer';
import { Form } from './Form';
import { Input } from './Input';
import { ControlButton } from './Button';
import { useHistory } from 'react-router';
import { makeStyles }  from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    textField: {
        width: "100%",
        marginTop: "20px"
    }
}));

const schema = yup.object().shape({
    surname: yup
        .string()
        .matches(/^([^0-9]*)$/, "Surname should not contain numbers")
        .matches(/^([A-Za-z]*)$/, "Surname should contain latin letters only")
        .min(3, "Surname should contain at least 3 letters")
        .max(20, "Surname should not contain more than 20 letters")
        .required("Surname is a required field"),
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Name should not contain numbers")
        .matches(/^([A-Za-z]*)$/, "Name should contain latin letters only")
        .min(3, "Name should contain at least 3 letters")
        .max(20, "Name should not contain more than 20 letters")
        .required("Name is a required field"),
    patronymic: yup
        .string()
        .matches(/^([^0-9]*)$/, "Patronymic should not contain numbers")
        .matches(/^([A-Za-z]*)$/, "Patronymic should contain latin letters only")
        .min(3, "Patronymic should contain at least 3 letters")
        .max(20, "Patronymic should not contain more than 20 letters")
        .required("Patronymic is a required field"),

});

const Step1Form = ({ addedName, addedSurname, addedPatronymic, addedBirthday, check, name, surname, patronymic, birthday }) => {

    const history = useHistory();

    const styles = useStyles()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { name: name, surname: surname, patronymic: patronymic },
        mode: "onTouched",
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        history.push("/step2")
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Enter your personal data</Typography>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Input
                    {...register('surname')}
                    type="text"
                    label="Surname"
                    name="surname"
                    onChange={(e) => addedSurname(e.target.value)}
                    error={!!errors.surname}
                    helperText={errors?.surname?.message}
                />
                <Input
                    {...register('name')}
                    type="text"
                    label="Name"
                    name="name"
                    onChange={(e) => addedName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                />
                <Input
                    {...register('patronymic')}
                    type="text"
                    label="Patronymic"
                    name="patronymic"
                    onChange={(e) => addedPatronymic(e.target.value)}
                    error={!!errors.patronymic}
                    helperText={errors?.patronymic?.message}
                />
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue={birthday}
                    className={styles.textField}
                    onChange={(e) => addedBirthday(e.target.value)}
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <ControlButton>Next</ControlButton>
            </Form>
            {/* <Button
                onClick={() => check()}
                variant="contained"
                color="primary"
            >log data</Button> */}
        </MainContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        surname: state.surname,
        patronymic: state.patronymic,
        birthday: state.birthday
    }
}

const mapDispatchToProps = {
    addedName,
    addedSurname,
    addedPatronymic,
    addedBirthday,
    check
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1Form);