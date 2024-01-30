import axios from 'axios';

const URL = 'http://localhost:9000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
