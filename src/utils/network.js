import axios from 'axios';
import { BASE_API_URL } from './constants';

export const getSearchResults = async (query) => {
    try {
        const posts = await axios.get(
            `${BASE_API_URL}/search?query=${query}`
            );
            return posts;
    } catch (error) {
        console.log('Error while getting search results.');
    }
  };

export const getDetails = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/items/${id}`);
        return story;
    } catch (error) {
        console.log('Error while getting the details.');
    }
};