import axios from "axios";

export const getRobots = async () => {
  try {
    const response = await axios.get("http://localhost:3000/robots");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
