import { useNavigate } from "react-router";
import { Typography, Button, Grid } from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";

const MissionDetails = () => {
  const navigate = useNavigate();

  const handleRedirectToMissions = () => navigate('/missions');

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Mission 1</Typography>
      </Grid>
      <Grid item>
        <Typography>Hobbit is a helping hand for elderly people, meaning that hobbit support them in their homes by getting rid of dangers and calling help in cases of emergency. The robot is vested with a Touchscreen, he communicates through language and is able to recognice and identify gestures.</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">Robot HOBBIT</Typography>
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
