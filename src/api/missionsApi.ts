import axios from 'axios';

export const getMissions = async () => {
  try {
    const response = await axios.get('http://localhost:3000/missions');
  
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
