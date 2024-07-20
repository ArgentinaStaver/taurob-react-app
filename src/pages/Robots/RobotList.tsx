import { Grid, Typography } from "@mui/material";

const RobotList = () => {
  return (
    <Grid container gap={3} justifyContent={"center"} margin='0 auto'>
      <Grid item xs={12} md={8}>
        <Typography component='h1' variant="h3">Robots</Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <h1>Robot 1</h1>
      </Grid>
      <Grid item xs={12} md={8}>
        <h1>Robot 2</h1>
      </Grid>
      <Grid item xs={12} md={8}>
        <h1>Robot 3</h1>
      </Grid>
    </Grid>
  );
}

export default RobotList;
