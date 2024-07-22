import axios from "axios";
import mapMissionResponseToModel from "../data-models/Missions/mapMissionResponseToModel";
import {
  MissionResponse,
  MissionsResponse,
} from "../data-models/Missions/MissionResponseModel";

const baseURL = import.meta.env.VITE_BASE_URL;

export const getMissions = async (): Promise<MissionsResponse> => {
  try {
    const { data, status } = await axios.get(`${baseURL}/missions`);

    return { data: data.map(mapMissionResponseToModel), status };
  } catch (error) {
    return { data: [], status: (error as any).response.status };
  }
};

export const getMissionById = async (
  missionId: number
): Promise<MissionResponse> => {
  try {
    const { data, status } = await axios.get(
      `${baseURL}/missions/${missionId}`
    );

    return { data: mapMissionResponseToModel(data), status };
  } catch (error) {
    return { status: (error as any).response.status };
  }
};
