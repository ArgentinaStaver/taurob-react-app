import { MissionModel } from "./MissionModel";
import { MissionResponseModel } from "./MissionResponseModel";

const mapMissionResponseToModel = (
  mission: MissionResponseModel
): MissionModel => ({
  ...mission,
  startDate: new Date(mission.startDate),
  endDate: new Date(mission.endDate),
});

export default mapMissionResponseToModel;
