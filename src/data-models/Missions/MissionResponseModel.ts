import { ResponseModel } from "../ResponseModel";
import { MissionModel } from "./MissionModel";

export interface MissionResponseModel {
  id: number;
  name: string;
  description: string;
  robotId: number;
  startDate: string;
  endDate: string;
}

export interface MissionResponse extends ResponseModel {
  data?: MissionModel;
}

export interface MissionsResponse extends ResponseModel {
  data: MissionModel[];
}
