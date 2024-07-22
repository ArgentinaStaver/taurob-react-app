import axios from "axios";
import {
  RobotResponse,
  RobotsResponse,
} from "../data-models/Robots/RobotResponseModel";
import mapRobotResponseToModel from "../data-models/Robots/mapRobotResponseToModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getRobots = async (): Promise<RobotsResponse> => {
  try {
    const { data, status } = await axios.get(`${baseURL}/robots`);

    return { data: data.map(mapRobotResponseToModel), status };
  } catch (error) {
    return { data: [], status: (error as any).response.status };
  }
};

export const getRobotById = async (robotId: number): Promise<RobotResponse> => {
  try {
    const { data, status } = await axios.get(`${baseURL}/robots/${robotId}`);

    return { data: mapRobotResponseToModel(data), status };
  } catch (error) {
    return { status: (error as any).response.status };
  }
};
