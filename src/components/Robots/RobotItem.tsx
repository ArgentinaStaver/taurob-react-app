import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { RobotModel } from "../../data-models/Robots/RobotModel";

interface IRobotItem {
  robot: RobotModel;
}

const RobotItem = ({ robot }: IRobotItem) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '140px' }}
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/smoking-robot-ron-magnes.jpg"
        title={robot.name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {robot.model}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          textOverflow: 'ellipsis " [..]"',
          overflow: "hidden",
          maxHeight: 80
        }}
        >
          {robot.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default RobotItem;
