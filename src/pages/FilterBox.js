import * as React from "react"
import List from "@mui/material/List"

export default function FilterBox(props) {
  const [checked, setChecked] = React.useState([])

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
      ></List>
    </>
  )
}
