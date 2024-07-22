import { RobotModel } from "./RobotModel";
import { RobotResponseModel } from "./RobotResponseModel";

const mapRobotResponseToModel = (robot: RobotResponseModel): RobotModel => ({
  ...robot,
});

export default mapRobotResponseToModel;
