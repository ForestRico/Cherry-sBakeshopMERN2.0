import axios from 'axios';

export const getUser = () =>
// Checking user in the local storage using 'getItem', if available the item is parsed into a Javascript Object, if nothing return null
localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null; 

export const login = async (email, password) => {
    const { data } = await axios.post('api/users/login', { email, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;
}