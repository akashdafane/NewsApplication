const LOGIN_INFO = 'LOGIN_INFO'
export const loginInfo = (email,password) => ({
    type: LOGIN_INFO,
    email,
    password,
});