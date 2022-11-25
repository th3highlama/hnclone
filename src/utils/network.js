import axios from 'axios';
import { BASE_API_URL } from './constants';

export const getSearchResults = async (query) => {
    try {
        const data = await axios.get(
            `${BASE_API_URL}/search?query=${query}`
            );
            return data;
    } catch (error) {
        console.log('Error while getting search results.');
    }
  };

export const getDetails = async (id) => {
    try {
        const details = await axios.get(`${BASE_API_URL}/items/${id}`);
        return details;
    } catch (error) {
        console.log('Error while getting the details.');
    }
};