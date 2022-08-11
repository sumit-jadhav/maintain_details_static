import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import { CaleNavBarleft } from "./CaleNavBarleft"
import { CaleNavBarright } from "./CaleNavBarright"

export const CalenderNavBar = () => {
  return (
    <>
      <div>
        <CalendarTodayIcon />
        Agenda view
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CaleNavBarleft></CaleNavBarleft>
        <CaleNavBarright></CaleNavBarright>
      </div>
    </>
  )
}
