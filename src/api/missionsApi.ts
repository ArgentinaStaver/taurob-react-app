import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

export const getMissions = async () => {
  try {
    const response = await axios.get(`${baseURL}/missions`);
  
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
