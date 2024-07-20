import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getRobots = async () => {
  try {
    const response = await axios.get(`${baseURL}/robots`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
