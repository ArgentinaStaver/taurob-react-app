import axios from "axios";
import mapMissionResponseToModel from "../data-models/Missions/mapMissionResponseToModel";
import {
  MissionResponse,
  MissionsResponse,
} from "../data-models/Missions/MissionResponseModel";
import { MissionRequestModel } from "../data-models/Missions/MissionRequestModel";
import { ResponseModel } from "../data-models/ResponseModel";

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

export const createMission = async (
  mission: MissionRequestModel
): Promise<MissionResponse> => {
  try {
    const { data, status } = await axios.post(`${baseURL}/missions`, mission);

    return { data: mapMissionResponseToModel(data), status };
  } catch (error) {
    return { status: (error as any).response.status };
  }
};

export const updateMission = async (
  id: number,
  mission: MissionRequestModel
): Promise<MissionResponse> => {
  try {
    const { data, status } = await axios.put(
      `${baseURL}/missions/${id}`,
      mission
    );

    return { data: mapMissionResponseToModel(data), status };
  } catch (error) {
    return { status: (error as any).response.status };
  }
};

export const deleteMissionById = async (id: number): Promise<ResponseModel> => {
  try {
    const { status } = await axios.delete(`${baseURL}/missions/${id}`);

    return { status };
  } catch (error) {
    return { status: (error as any).response.status };
  }
};
