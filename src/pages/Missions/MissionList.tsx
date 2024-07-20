import { Grid, Typography } from "@mui/material";
import MissionItem from "../../components/Missions/MissionItem";


const MissionList = () => {
  return (
    <Grid container gap={3} justifyContent={"center"} margin='0 auto'>
      <Grid item xs={12} md={8}>
        <Typography component='h1' variant="h3">Robots missions</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <MissionItem title={"Mission 1"} />
      </Grid>
      <Grid item xs={12} md={8}>
        <MissionItem title={"Mission 2"} />
      </Grid>
      <Grid item xs={12} md={8}>
        <MissionItem title={"Mission 3"} />
      </Grid>
    </Grid>
  );
}

export default MissionList;
