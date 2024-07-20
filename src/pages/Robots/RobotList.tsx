import { useEffect, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { RobotModel } from "../../data-models/Robots/RobotModel";
import { getRobots } from "../../api/robotsApi";
import RobotItem from "../../components/Robots/RobotItem";

const RobotList = () => {
  const [robots, setRobots] = useState<RobotModel[]>([]);

  useEffect(() => {
    getRobots().then((data) => setRobots(data));
  }, []);

  return (
    <Grid container gap={2} justifyContent={"center"} margin='0 auto' maxWidth={"lg"}>
      <Grid item xs={12}>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Typography variant="h3">Robots</Typography>
          <div>
            <Button variant="contained" color="success" startIcon={<Add />}>Robot</Button>
          </div>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {robots.map(robot => {
            return (
              <Grid item xs={12} md={4}>
                <RobotItem robot={robot} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RobotList;
