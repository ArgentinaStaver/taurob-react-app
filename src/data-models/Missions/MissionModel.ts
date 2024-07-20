import { RobotModel } from "../Robots/RobotModel";

export interface Mission {
  id: number;
  name: string;
  description: string;
  robot: RobotModel;
}
