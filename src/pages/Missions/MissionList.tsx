import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { MissionModel } from "../../data-models/Missions/MissionModel";
import { getMissions } from "../../api/missionsApi";
import MissionItem from "../../components/Missions/MissionItem";


const MissionList = () => {
  const [missions, setMissions] = useState<MissionModel[]>([]);

  useEffect(() => {
    getMissions().then((response) => setMissions(response.data)).catch(() => alert('Error fetching missions'));
  }, []);

  return (
    <Grid container gap={3} justifyContent={"center"} margin='0 auto'>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">Robots missions</Typography>
      </Grid>
      {
        missions.map((mission) =>
          <Grid item xs={12} md={8} key={mission.id}>
            <MissionItem mission={mission} />
          </Grid>
        )
      }
    </Grid>
  );
}

export default MissionList;
