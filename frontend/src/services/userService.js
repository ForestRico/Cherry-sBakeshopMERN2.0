import axios from 'axios';

export const getUser = () =>
// Checking user in the local storage using 'getItem', if available the item is parsed into a Javascript Object, if nothing return null
localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null; 


//email and pass as input, if it matches existing email and pass, user data will be stored in local storage (covnert the user data (JSON) into string), and returned as 'data' 
export const login = async (email, password) => {
    const { data } = await axios.post('api/users/login', { email, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

//removes user from local storage, so that user will be null (logged out)

export const logout = () => {
    localStorage.removeItem('user');
};
