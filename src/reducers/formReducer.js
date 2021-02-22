const initialState = {
    inputData: []
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INFO":
            return{
                ...state,
                inputData: [
                    ...state.inputData,
                    {
                        firstName: action.firstName,
                        lastName: action.lastName,
                        email: action.email,
                        phone: action.phone,
                        address: action.address,
                        dob: action.dob,
                        time: action.time,
                        url: action.url,
                        
                        // id:action.id
                    }
                ]
            };
        default:
            return state;
    }
}

export default formReducer;