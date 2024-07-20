import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material"
import { PrecisionManufacturingOutlined } from "@mui/icons-material";

const Header = () => {
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");

  return (
    <Box sx={{ paddingBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={goToHomePage}
          >
            <PrecisionManufacturingOutlined />
          </IconButton>
          <Stack direction={"row"} spacing={3}>
            <Link to="missions">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"white"}>
                Missions
              </Typography>
            </Link>
            <Link to="robots">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"white"}>
                Robots
              </Typography>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;
