import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import TablePagination from "@mui/material/TablePagination"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import React, { useState, useEffect } from "react"

export const TableForm = ({ people }) => {
  const [tpeople, setTpeople] = useState(people)
  //   console.log(tpeople)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 2))
    setPage(0)
  }
  useEffect(() => {}, [tpeople])

  const asceCust = (e) => {
    e.preventDefault()
    const scust = people
    scust.sort((a, b) => {
      return a.name > b.name ? 1 : -1
    })
    // console.log("sort", people)
    setTpeople(people)
    console.log(scust)
  }
  const asceProstaus = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.projectStatus > b.projectStatus ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const ascePerstatus = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.permitStatus > b.permitStatus ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const asceAssiTo = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.AssignTo > b.AssignTo ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const ascePhNo = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.phoneNumber > b.phoneNumber ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const asceCity = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.City > b.City ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const asceProType = (e) => {
    const scust = people
    scust.sort((a, b) => {
      return a.ProjectType > b.ProjectType ? 1 : -1
    })
    setTpeople(scust)
    console.log(scust)
  }
  const myStyle = {
    padding: "0px",
    boxSizing: "content-box",
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell style={myStyle}>
                Customer
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceCust} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Project Status
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceProstaus} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Permit Status
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={ascePerstatus} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Phone Number
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={ascePhNo} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Assigned To
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceAssiTo} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                City
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceCity} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Project Type
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceProType} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>Name Change</TableCell>
            </TableRow>
          </TableHead>
          {console.log("people", people)}
          {tpeople.length > 0 && (
            <TableBody>
              {tpeople
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{}} component="th" scope="row">
                      <Avatar alt="Remy Sharp" src={row.image} />
                      {row.name}
                    </TableCell>

                    <TableCell>{row.projectStatus}</TableCell>
                    <TableCell>{row.permitStatus}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>
                      <Avatar alt="Remy Sharp" src={row.image} />
                      {row.AssignTo}
                    </TableCell>
                    <TableCell>{row.City}</TableCell>
                    <TableCell>{row.ProjectType}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ position: "fixed", bottom: "0", right: "0" }}
        // component="div"
        count={15}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}
