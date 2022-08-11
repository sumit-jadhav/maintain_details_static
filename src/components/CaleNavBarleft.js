import Button from "@mui/material/Button"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import ListItemIcon from "@mui/material/ListItemIcon"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

export const CaleNavBarleft = () => {
  return (
    <>
      <div
      // style={{ padding: "0px", display: "flex", justifyContent: "center" }}
      >
        <Button variant="Today">
          <CalendarTodayIcon></CalendarTodayIcon>Today
        </Button>
        <Button variant="leftarrow">
          <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
        </Button>
        <Button variant="leftarrow">
          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </Button>
        <ListItemIcon>
          <Autocomplete
            options="July"
            sx={{ width: 130, height: 30 }}
            renderInput={(params) => (
              <TextField {...params} label="July 2022" />
            )}
          />
        </ListItemIcon>
      </div>
    </>
  )
}
