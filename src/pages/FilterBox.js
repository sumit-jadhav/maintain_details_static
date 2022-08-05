import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import { styled } from "@mui/material/styles"
import { blue } from "@mui/material/colors"

export default function FilterBox(props) {
  const list = props.uniqueTags
  const [checked, setChecked] = React.useState([])

  //   console.log(list)

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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))

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
        {list.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem
              key={value}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      {/* <div
        style={{
          backgroundColor: "blue",
          display: "flex",
          mainstart: "0px",
          crossend: "0px",
        }}
      >
        {checked.length > 0 &&
          checked.map((i) => (
            <Stack direction="row" spacing={2}>
              <Item>{i}</Item>
            </Stack>
          ))}
      </div> */}
    </>
  )
}
