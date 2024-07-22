import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { RobotModel } from "../../data-models/Robots/RobotModel";

interface IRobotItem {
  robot: RobotModel;
  onEdit: (robot: RobotModel) => void;
  onDelete: (robotId: number) => void;
}

const RobotItem = ({ robot, onEdit, onDelete }: IRobotItem) => {
  return (
    <Card sx={{
      minHeight: 380,
      display: "flex",
      flexDirection: "column"
    }}>
      <CardMedia
        sx={{ height: '140px' }}
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/smoking-robot-ron-magnes.jpg"
        title={robot.name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {robot.name}
        </Typography>
        <Typography gutterBottom variant="body1">
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
      <CardActions sx={{
        marginTop: "auto",
        justifyContent: "flex-end",
      }}>
        <Button size="small" variant="outlined" onClick={() => onEdit(robot)}>Edit</Button>
        <Button size="small" color="error" variant="outlined" onClick={() => onDelete(robot.id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default RobotItem;
