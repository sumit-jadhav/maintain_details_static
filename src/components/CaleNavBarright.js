import Button from "@mui/material/Button"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import ViewListIcon from "@mui/icons-material/ViewList"
import ViewComfyIcon from "@mui/icons-material/ViewComfy"

export const CaleNavBarright = () => {
  return (
    <>
      <div style={{}}>
        InProgress OverDue Done
        <Button variant="Today">
          <ViewComfyIcon></ViewComfyIcon>
        </Button>
        <Button variant="Today">
          <CalendarTodayIcon></CalendarTodayIcon>
        </Button>
        <Button variant="Today">
          <ViewListIcon></ViewListIcon>
        </Button>
      </div>
    </>
  )
}
