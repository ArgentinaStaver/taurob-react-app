import { useNavigate } from "react-router";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { MissionModel } from "../../data-models/Missions/MissionModel";

interface IMissionItem {
  mission: MissionModel;
  onEdit: (mission: MissionModel) => void;
  onDelete: (missionId: number) => void;
}

const MissionItem = ({ mission, onEdit, onDelete }: IMissionItem) => {
  const navigate = useNavigate();

  const handleRedirectToMissionDetails = () => navigate(`/mission-details/${mission.id}`);

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack alignItems={'center'} justifyContent={'flex-end'} direction={'row'} gap={1}>
          <Typography flexGrow={1} variant="h5">{mission.name}</Typography>
          <Button size="small" onClick={() => onEdit(mission)}>Edit</Button>
          <Button size="small" color="error" onClick={() => onDelete(mission.id)}>Delete</Button>
          <Button
            variant='contained'
            endIcon={<KeyboardArrowRightOutlined />}
            onClick={handleRedirectToMissionDetails}
          >
            Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MissionItem;
