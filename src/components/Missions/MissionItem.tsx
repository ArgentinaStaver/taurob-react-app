import { useNavigate } from "react-router";
import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

interface IMissionItem {
  title: string;
}

const MissionItem = ({ title }: IMissionItem) => {
  const navigate = useNavigate();

  const handleRedirectToMissionDetails = () => navigate('/');

  return (
    <Card elevation={3}>
      <CardContent>
        <Stack direction={"column"} justifyContent='flex-start' rowGap={1} columnGap={5}>
          <Stack spacing={1} textAlign={'center'}>
            <Typography variant="h5">{title}</Typography>
          </Stack>
          <Stack flexGrow={1} alignItems={'center'} justifyContent={'flex-end'} direction={'row'} gap={1}>
            <Button
              variant='text'
              size="small"
              endIcon={<KeyboardArrowRightOutlined />}
              onClick={handleRedirectToMissionDetails}
            >
              Detalii
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MissionItem;
