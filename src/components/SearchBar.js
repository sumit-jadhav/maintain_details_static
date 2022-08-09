import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import FilterAltIcon from "@mui/icons-material/FilterAlt"
import Button from "@mui/material/Button"
import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import Autocomplete from "@mui/material/Autocomplete"

const SearchBar = ({ people, setSearch, setFlist }) => {
  const ProjectStatus = [
    "Advance Received",
    "Welcome Call",
    "Ready for installation",
    "DEV Schedule",
  ]

  const PermitStatus = ["LC Permit", "NC Permit", "PC Permit"]
  const City = ["East Delhi", "West Delhi", "Nort Delhi", "North East Delhi"]

  const [valueProject, setValueProject] = useState(null)
  const [valuePermit, setValuePermit] = useState(null)
  const [valueCity, setValueCity] = useState(null)

  const [state, setState] = useState({
    right: false,
  })
  const ApplyFilter = () => setFlist([valuePermit, valueProject, valueCity])
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <div>
                <br />
                <Autocomplete
                  value={valuePermit}
                  onChange={(event, newValue) => {
                    setValuePermit(newValue)
                  }}
                  id="PermitStatus"
                  options={PermitStatus}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="PermitStatus" />
                  )}
                />
              </div>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <div>
                <br />
                <Autocomplete
                  value={valueProject}
                  onChange={(event, newValue) => {
                    setValueProject(newValue)
                  }}
                  id="ProjectStatus"
                  options={ProjectStatus}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="ProjectStatus" />
                  )}
                />
              </div>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <div>
                <br />
                <Autocomplete
                  value={valueCity}
                  onChange={(event, newValue) => {
                    setValueCity(newValue)
                  }}
                  id="City"
                  options={City}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="City" />
                  )}
                />
              </div>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Button
            onClick={function (event) {
              toggleDrawer(anchor, false)
              ApplyFilter()
            }}
          >
            Apply
          </Button>
        </ListItem>
      </List>
    </Box>
  )

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

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
          <div>
            {["right"].map((a) => (
              <React.Fragment key={a}>
                <Button onClick={toggleDrawer(a, true)}>
                  <FilterAltIcon></FilterAltIcon>
                </Button>
                <Drawer
                  anchor={a}
                  open={state[a]}
                  onClose={toggleDrawer(a, false)}
                >
                  {list(a)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
          <TextField
            id="outlined-start-adornment"
            onChange={handleSearch}
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
