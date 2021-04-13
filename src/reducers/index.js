const initialState = {
    name: null,
    surname: null,
    patronymic: null,
    email: null,
    password: null,
    birthday: null,
    header: 'Registration form',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
                name: action.payload,
            };

        case 'ADD_SURNAME':
            return {
                ...state,
                surname: action.payload,
            };

        case 'ADD_PATRONYMIC':
            return {
                ...state,
                patronymic: action.payload,
            };

        case 'CHECK':
            console.log(state);
            return {
                ...state,
                };
        
        case 'ADD_EMAIL':
            return {
                ...state,
                email: action.payload,
            };

        case 'ADD_PASSWORD':
            return {
                ...state,
                password: action.payload,
            };
            
        case 'ADD_BIRTHDAY':
            return {
                ...state,
                birthday: action.payload,
            };

        case 'CHANGE_HEADER':   
            return {
                ...state,
                header: action.payload,
            };
        
        default:
            return state;
    }
}

export default reducer;