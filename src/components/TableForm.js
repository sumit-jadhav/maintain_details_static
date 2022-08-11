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

export const TableForm = ({ people, flist }) => {
  const [tpeople, setTpeople] = useState(people)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(0)
  const [sort, setSort] = useState(true)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 2))
    setPage(0)
  }

  // const size = Object.keys(flist).length
  // if (size > 0) {
  //   Object.keys(flist).map((e, k) => {
  //     console.log(e)
  //   })
  // }

  const coloumHeadersArray = Object.keys(tpeople[0])

  // Object.keys(flist).map((e, k) => {
  //   console.log(e)
  // })

  coloumHeadersArray.map((h, i) => {
    tpeople.map((eachRow, index) => {
      // console.log(eachRow[h], flist[h])
      if (eachRow[h] === flist[h]) {
        console.log(eachRow)
      }
    })
  })

  const asceCust = (e) => {
    const val = e.target.id
    const scust = JSON.parse(JSON.stringify(tpeople))
    scust.sort((a, b) => {
      // console.log(a[val], b[val])
      if (sort) {
        setSort(!sort)
        return a[val] > b[val] ? 1 : -1
      } else {
        setSort(!sort)
        return a[val] < b[val] ? 1 : -1
      }
    })
    console.log(scust)
    setTpeople(scust)
  }

  const myStyle = {
    // display: "flex",
    // flexDirection: "row",
    padding: "0px",
    boxSizing: "content-box",
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  // console.log("people", people)

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell style={myStyle}>
                Customer
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="name"
                    value="name"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon
                      id="name"
                      value="name"
                      style={{ alignItems: "center" }}
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Project Status
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="projectStatus"
                    value="projectStatus"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon
                      id="projectStatus"
                      value="projectStatus"
                      style={{ alignItems: "center" }}
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Permit Status
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="permitStatus"
                    value="permitStatus"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon
                      id="permitStatus"
                      value="permitStatus"
                      style={{ alignItems: "center" }}
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Phone Number
                <Tooltip title="Filter" placement="right-start">
                  <Button onClick={asceCust} style={{ padding: "0px" }}>
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Assigned To
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="AssignTo"
                    value="AssignTo"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon style={{ alignItems: "center" }} />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                City
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="City"
                    value="City"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon
                      id="City"
                      value="City"
                      style={{ alignItems: "center" }}
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>
                Project Type
                <Tooltip title="Filter" placement="right-start">
                  <Button
                    id="ProjectType"
                    value="ProjectType"
                    onClick={asceCust}
                    style={{ padding: "0px" }}
                  >
                    <UnfoldMoreIcon
                      id="ProjectType"
                      value="ProjectType"
                      style={{ alignItems: "center" }}
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={myStyle}>Name Change</TableCell>
            </TableRow>
          </TableHead>
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
