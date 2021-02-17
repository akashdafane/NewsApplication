const ADD_INFO = 'ADD_INFO'
export const addInfo = (firstName,lastName,email,phone,address,dob,time,url) => ({
    type: ADD_INFO,
    firstName,
    lastName,
    email,
    phone,
    address,
    dob,
    time,
    url,
});
