import React, { useState, useEffect } from "react"
import { TableForm } from "../components/TableForm"
import SearchBar from "../components/SearchBar"
import "./TableCust"

// import { AppContext } from "../AppProvider"
import data from "../components/data"

export const TableCust = () => {
  const [people, setPeople] = useState(data)

  const [page, setPage] = useState(0)
  const [customer, setCustomer] = useState("")
  const [flist, setFlist] = useState([])

  // useEffect(() => {
  //   setPeople(data)
  // }, [])

  // const handleChange = (event) => {
  //   setCustomer(event.target.value)
  // }

  // useEffect(() => {
  //   console.log(flist)
  // }, [flist])

  return (
    <>
      <SearchBar
        setFlist={setFlist}
        people={people}
        setPeople={setPeople}
      ></SearchBar>
      <TableForm people={people} page={page} setPage={setPage} />
    </>
  )
}
