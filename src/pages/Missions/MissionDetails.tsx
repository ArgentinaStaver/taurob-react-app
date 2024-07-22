import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Typography, Button, Grid } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
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
    const missionData = await getMissionById(missionId);
    setMission(missionData);
  }

  const fetchRobotById = async (robotId: number) => {
    const robotData = await getRobotById(robotId);
    setRobot(robotData);
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
