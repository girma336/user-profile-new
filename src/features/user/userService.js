import axios from 'axios';

const API_URL = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'

const getUser = async() => {
    const respo = await axios.get(API_URL);

    return respo.data
}

const userService = {
    getUser,
}

export default userService;