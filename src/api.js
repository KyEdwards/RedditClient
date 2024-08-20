import axios from "axios";

 const apiBaseUrl = 'https://www.reddit.com';

const instance = axios.create({
    baseURL: apiBaseUrl,
    timeout: 1000,
  });

  export const apiCall = async () => {
    try {
        const response = await instance.get('/endpoint');
        return response.data;
    }
    catch (error){
        console.error('Error fetching data', error);
        throw error;
    }
  }