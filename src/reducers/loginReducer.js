const initialState = {
    loginData: []
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_INFO":
            return {
                ...state,
                loginData: [
                    ...state.loginData,
                    {
                        email: action.email,
                        password: action.password

                        // id:action.id
                    }
                ]
            };
        default:
            return state;
    }
}

export default loginReducer;