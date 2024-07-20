import { useNavigate } from "react-router";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
import { MissionModel } from "../../data-models/Missions/MissionModel";

interface IMissionItem {
  mission: MissionModel;
}

const MissionItem = ({ mission }: IMissionItem) => {
  const navigate = useNavigate();

  const handleRedirectToMissionDetails = () => navigate(`/mission-details/${mission.id}`);

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack direction={"column"} justifyContent='flex-start' rowGap={1} columnGap={5}>
          <Stack spacing={1} textAlign={'center'}>
            <Typography variant="h5">{mission.name}</Typography>
          </Stack>
          <Stack flexGrow={1} alignItems={'center'} justifyContent={'flex-end'} direction={'row'} gap={1}>
            <Button
              variant='text'
              endIcon={<KeyboardArrowRightOutlined />}
              onClick={handleRedirectToMissionDetails}
            >
              Details
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MissionItem;
