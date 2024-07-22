import { ResponseModel } from "../ResponseModel";
import { RobotModel } from "./RobotModel";

export interface RobotResponseModel {
  id: number;
  name: string;
  model: string;
  description: string;
}

export interface RobotResponse extends ResponseModel {
  data?: RobotModel;
}

export interface RobotsResponse extends ResponseModel {
  data: RobotModel[];
}
