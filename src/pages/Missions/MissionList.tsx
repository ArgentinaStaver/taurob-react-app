import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { format } from "date-fns";
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { MissionModel } from "../../data-models/Missions/MissionModel";
import { createMission, deleteMissionById, getMissions, updateMission } from "../../api/missionsApi";
import { getRobots } from "../../api/robotsApi";
import MissionItem from "../../components/Missions/MissionItem";
import { RobotModel } from "../../data-models/Robots/RobotModel";
import { MissionRequestModel } from "../../data-models/Missions/MissionRequestModel";


const MissionList = () => {
  const [missions, setMissions] = useState<MissionModel[]>([]);
  const [missionToEdit, setMissionToEdit] = useState<MissionModel | null>(null);
  const [robots, setRobots] = useState<RobotModel[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const fetchRobots = () => getRobots().then((response) => setRobots(response.data)).catch(() => toast.error("Error fetching robots"));

  const fetchMissions = () => getMissions().then((response) => setMissions(response.data)).catch(() => toast.error('Error fetching missions'));

  const handleOpenDialog = (mission?: MissionModel) => {
    setMissionToEdit(mission || null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    fetchMissions();
    fetchRobots();
  }, []);


  const handleCreateMission = async (mission: MissionModel) => {
    const missionPayload: MissionRequestModel = {
      ...mission,
      startDate: mission.startDate.toString(),
      endDate: mission.endDate.toString(),
    };

    const { status } = await createMission(missionPayload);

    if (status === 201) {
      fetchMissions();
      toast.success("Mission succesfully created");
    } else {
      toast.error("Error by creating the mission");
    }
  }

  const handleUpdateMission = async (mission: MissionModel) => {
    if (!missionToEdit) return;
    const missionPayload: MissionRequestModel = {
      ...mission,
      startDate: mission.startDate.toString(),
      endDate: mission.endDate.toString(),
    };

    const { status } = await updateMission(missionToEdit.id, missionPayload);

    if (status === 200) {
      fetchMissions();
      toast.success("Mission succesfully updated");
    } else {
      toast.error("Error by updating the robot");
    }
  }

  const handleDeleteMission = async (id: number) => {
    if (window.confirm("Do you really want to delete the mission?")) {
      const { status } = await deleteMissionById(id);
      if (status === 200) {
        fetchMissions();
        toast.success('Mission successfully deleted!');
      } else if (status === 404) {
        toast.error("Mission not found");
      }
    }
  }

  return (
    <>
      <Grid container gap={3} justifyContent={"center"} margin='0 auto'>
        <Grid item xs={12} md={8}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h4">Robots missions</Typography>
            <div>
              <Button
                variant="contained"
                color="success"
                startIcon={<Add />}
                onClick={() => handleOpenDialog()}
              >
                Mission
              </Button>
            </div>
          </Stack>
        </Grid>
        {
          missions.map((mission) =>
            <Grid item xs={12} md={8} key={mission.id}>
              <MissionItem mission={mission} onEdit={handleOpenDialog} onDelete={handleDeleteMission} />
            </Grid>
          )
        }
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
            missionToEdit ? handleUpdateMission(formJson as MissionModel) : handleCreateMission(formJson as MissionModel);
            handleCloseDialog();
          },
        }}
      >
        <DialogTitle>{missionToEdit ? "Edit mission" : "Add new Mission"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Mission name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={missionToEdit?.name || null}
          />
          <FormControl fullWidth sx={{
            marrginTop: '20px'
          }}>
            <InputLabel id="select-label">Robot</InputLabel>
            <Select
              labelId="select-label"
              defaultValue={missionToEdit?.robotId || ''}
              required
              margin="dense"
              id="robotId"
              name="robotId"
              fullWidth
              variant="standard"
            >
              {
                robots.map((robot) => <MenuItem value={robot.id} key={robot.id}>{robot.name}</MenuItem>)
              }
            </Select>
          </FormControl>
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Mission description"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={missionToEdit?.description || null}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="startDate"
            name="startDate"
            label="Mission start date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue={missionToEdit ? format(missionToEdit?.startDate, "yyyy-MM-dd") : ''}
            focused
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="endDate"
            name="endDate"
            label="Mission end date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue={missionToEdit ? format(missionToEdit?.endDate, "yyyy-MM-dd") : null}
            focused
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

export default MissionList;
