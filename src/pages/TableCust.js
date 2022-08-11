import React, { useState, useEffect } from "react"
import { TableForm } from "../components/TableForm"
import SearchBar from "../components/SearchBar"
import "./TableCust"
import FilterBar from "../components/FilterBar"
import data from "../components/data"

export const TableCust = () => {
  const [people, setPeople] = useState(data)
  const [search, setSearch] = useState("")
  const [flist, setFlist] = useState({
    projectStatus: null,
    permitStatus: null,
    City: null,
  })

  useEffect(() => {
    console.log(flist)
  }, [flist])

  return (
    <>
      <SearchBar
        setFlist={setFlist}
        flist={flist}
        setSearch={setSearch}
        people={people}
      ></SearchBar>
      <FilterBar flist={flist} setFlist={setFlist}></FilterBar>
      <TableForm people={people} flist={flist} />
    </>
  )
}
