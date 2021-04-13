const addedName = (name) => {
    return {
        type: 'ADD_NAME',
        payload: name
    };
};

const addedSurname = (surname) => {
    return {
        type: 'ADD_SURNAME',
        payload: surname,
    };
};

const addedPatronymic = (patronymic) => {
    return {
        type: 'ADD_PATRONYMIC',
        payload: patronymic,
    };
};

const check = () => {
    return {
        type: 'CHECK',
    };
};

const addedEmail = (email) => {
    return {
        type: 'ADD_EMAIL',
        payload: email
    };
};

const addedPassword = (password) => {
    return {
        type: 'ADD_PASSWORD',
        payload: password
    };
};

const addedBirthday = (birthday) => {
    return {
        type: 'ADD_BIRTHDAY',
        payload: birthday
    };
};

const changeHeader = (header) => {
    return {
        type: 'CHANGE_HEADER',
        payload: header
    };
};

export {
    addedName,
    addedSurname,
    addedPatronymic,
    check,
    addedEmail,
    addedPassword,
    addedBirthday,
    changeHeader
};