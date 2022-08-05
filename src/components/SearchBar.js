import Stack from "@mui/material/Stack"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import React, { useState, useEffect } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import CancelIcon from "@mui/icons-material/Cancel"
import { padding } from "@mui/system"

const SearchBar = ({ people }) => {
  const p = people
  console.log(p)
  const [checked, setChecked] = useState([])
  const [uniqueTags, setUniqueTags] = useState([])
  const [filter, setFilter] = useState(false)

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

  const filterBox = () => {
    const a = []
    people.map(async (img) => {
      if (a.indexOf(img.projectStatus) === -1) {
        await a.push(img.projectStatus)
      }
      if (a.indexOf(img.permitStatus) === -1) {
        await a.push(img.permitStatus)
      }
      if (a.indexOf(img.AssignTo) === -1) {
        await a.push(img.AssignTo)
      }
      if (a.indexOf(img.City) === -1) {
        await a.push(img.City)
      }
      if (a.indexOf(img.ProjectType) === -1) {
        await a.push(img.ProjectType)
      }
    })
    // console.log(a)
    setUniqueTags(a)
    setFilter(!filter)
  }

  //   useEffect(() => {
  //     props.setFlist(checked)
  //     console.log("sheckked")
  //   }, [checked])

  //   console.log(list)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))

  return (
    <>
      <div>
        <h3 style={{ position: "absolute", align: "center" }}>All Task</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          {!filter && (
            <Tooltip title="Filter" placement="right-start">
              <Button onClick={filterBox} style={{ padding: "0px" }}>
                <FilterAltIcon></FilterAltIcon>
              </Button>
            </Tooltip>
          )}
          {filter && (
            <div>
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
                {uniqueTags.map((value) => {
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
              <div
                style={{
                  backgroundColor: "blue",
                  display: "flex",
                }}
              >
                {checked.length > 0 &&
                  checked.map((i) => (
                    <Stack direction="row" spacing={2}>
                      <Item style={{ design: "flex", padding: "0px" }}>
                        {i}
                        <Button onClick={filterBox} style={{ padding: "0px" }}>
                          <CancelIcon style={{ padding: "0px" }} />
                        </Button>
                      </Item>
                    </Stack>
                  ))}
              </div>
              <Button onClick={filterBox} style={{ padding: "0px" }}>
                Apply
              </Button>
            </div>
          )}
          <TextField
            id="outlined-start-adornment"
            // onChange={handleSearch}
            style={{
              m: 1,
              width: "25ch",
            }}
            placeholder="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default SearchBar
