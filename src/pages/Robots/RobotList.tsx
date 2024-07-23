import React from "react";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, TextField, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { toast } from "react-toastify";
import { RobotModel } from "../../data-models/Robots/RobotModel";
import { RobotRequestModel } from "../../data-models/Robots/RobotRequestModel";
import { createRobot, deleteRobotById, getRobots, updateRobot } from "../../api/robotsApi";
import RobotItem from "../../components/Robots/RobotItem";

const RobotList = () => {
  const [robots, setRobots] = useState<RobotModel[]>([]);
  const [robotToEdit, setRobotToEdit] = useState<RobotModel | null>(null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const fetchRobots = () => getRobots().then((response) => setRobots(response.data)).catch(() => toast.error("Error fetching robots"));

  useEffect(() => {
    fetchRobots();
  }, []);


  const handleOpenDialog = (robot?: RobotModel) => {
    setRobotToEdit(robot || null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCreateRobot = async (robot: RobotRequestModel) => {
    const { status } = await createRobot(robot);

    if (status === 201) {
      fetchRobots();
      toast.success("Robot succesfully created");
    } else {
      toast.error("Error by creating the robot");
    }
  }

  const handleUpdateRobot = async (robot: RobotRequestModel) => {
    if (!robotToEdit) return;

    const { status } = await updateRobot(robotToEdit.id, robot);

    if (status === 200) {
      fetchRobots();
      toast.success("Robot succesfully updated");
    } else {
      toast.error("Error by updating the robot");
    }
  }

  const handleDeleteRobot = async (id: number) => {
    if (window.confirm("Do you really want to delete the robot?")) {
      const { status } = await deleteRobotById(id);
      if (status === 200) {
        fetchRobots();
        toast.success('Robot successfully deleted!');
      } else if (status === 404) {
        toast.error("Robot not found");
      }
    }
  }

  return (
    <>
      <Grid container gap={2} margin='0 auto' maxWidth={"lg"} sx={{ padding: `24px 16px 0` }}>
        <Grid item xs={12}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h3">Robots</Typography>
            <div>
              <Button
                variant="contained"
                color="success"
                startIcon={<Add />}
                onClick={() => handleOpenDialog()}
              >
                Robot
              </Button>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {robots.map(robot => {
              return (
                <Grid item xs={12} md={4} key={robot.name}>
                  <RobotItem robot={robot} onEdit={handleOpenDialog} onDelete={handleDeleteRobot} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            robotToEdit ? handleUpdateRobot(formJson as RobotRequestModel) : handleCreateRobot(formJson as RobotRequestModel);
            handleCloseDialog();
          },
        }}
      >
        <DialogTitle>{robotToEdit ? "Edit robot" : "Add new Robot"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter new data here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Robot name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={robotToEdit?.name || null}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="model"
            name="model"
            label="Robot model"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={robotToEdit?.model || null}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Robot description"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={robotToEdit?.description || null}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default RobotList;
