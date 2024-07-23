import { Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Grid container sx={{
      backgroundImage: `url("https://spacetrek.com/site/wp-content/themes/tjoy/images/page-header.jpg")`,
      backgroundSize: "cover",
      height: "100vh",
    }}>
      <Grid item xs={12} md={8} paddingTop={5}>
        <Typography variant="h4" color={"#FFFFFF"} textAlign={"center"}>Explore the MISSION of our ROBOTICS</Typography>
      </Grid>
    </Grid>
  );
}

export default HomePage;
