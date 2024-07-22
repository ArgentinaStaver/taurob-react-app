import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Typography, Button, Grid } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { format } from "date-fns";
import { getMissionById } from "../../api/missionsApi";
import { getRobotById } from "../../api/robotsApi";
import { MissionModel } from "../../data-models/Missions/MissionModel";
import { RobotModel } from "../../data-models/Robots/RobotModel";

const MissionDetails = () => {
  const [mission, setMission] = useState<MissionModel>();
  const [robot, setRobot] = useState<RobotModel>();
  const navigate = useNavigate();
  let { id } = useParams(); //missionId

  const fetchMissionById = async (missionId: number) => {
    const { data } = await getMissionById(missionId);
    setMission(data);
  }

  const fetchRobotById = async (robotId: number) => {
    const { data } = await getRobotById(robotId);
    setRobot(data);
  }

  useEffect(() => {
    if (id) fetchMissionById(parseInt(id));
  }, [id]);

  useEffect(() => {
    if (id && mission) {
      fetchRobotById(mission.robotId);
    }
  }, [mission]);

  const handleRedirectToMissions = () => navigate('/missions');

  if (!mission) return <Grid container>
    <Grid item>Loading mission...</Grid>
  </Grid>

  return (
    <Grid container gap={3} justifyContent={"center"}>
      <Grid item xs={12} md={8} textAlign={"center"}>
        <Typography variant="h4">{mission?.name}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>{mission?.description}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4">{robot?.model}</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>Mission start date: {format(mission.startDate, "MM/dd/yyyy")}</Typography>
        <Typography>Mission end date: {format(mission.endDate, "MM/dd/yyyy")}</Typography>
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Button
          variant="text"
          startIcon={<ArrowBackIosNewRounded />}
          disableRipple
          sx={{
            marginTop: '20px',
            '&.MuiButton-root:hover': {
              textDecoration: 'underline',
              backgroundColor: 'unset',
            }
          }}
          onClick={handleRedirectToMissions}
        >
          Back to missions
        </Button>
      </Grid>
    </Grid>
  );
}

export default MissionDetails;
