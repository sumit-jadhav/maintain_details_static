import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"

export default function FilterBox(props) {
  //   const list = props.uniqueTags

  const [checked, setChecked] = React.useState([])

  // console.log(list)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    console.log(newChecked)
  }

  return (
    <>
      <List
        dense
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 150,
          "& ul": { padding: 0 },
        }}
      >
        {/* <ListItem>
            //   key={value}
            //   secondaryAction={
            //     <Checkbox
            //       edge="end"
            //       onChange={handleToggle(value)}
            //       checked={checked.indexOf(value) !== -1}
            //       inputProps={{ "aria-labelledby": labelId }}
            //     />
            //   }
            //   disablePadding
            // >
            //   <ListItemButton>
            //     <ListItemText id={labelId} primary={`${value}`} />
            //   </ListItemButton>
            </ListItem> */}
      </List>
    </>
  )
}
