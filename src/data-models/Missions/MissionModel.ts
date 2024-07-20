import { RobotModel } from "../Robots/RobotModel";

export interface MissionModel {
  id: number;
  name: string;
  description: string;
  robot: RobotModel;
}
