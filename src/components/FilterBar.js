import Stack from "@mui/material/Stack"
import CancelIcon from "@mui/icons-material/Cancel"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const FilterBar = ({ flist, setFlist }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "2px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))
  const clearfilter = () => setFlist([])

  const removeItem = (e) => {
    const newPeople = JSON.parse(JSON.stringify(flist))
    var a = flist.findIndex(e.target.value)
    console.log(a)

    // newPeople.filter((a) => a !== e.target.value)
    // setFlist(newPeople)
    // console.log(flist)

    //   delete newPeople[a]
    //   setFlist(newPeople)
    //   console.log(flist)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: " #928E8D",
          display: "flex",
        }}
      >
        {flist.length > 0 &&
          flist.map((i) => (
            <Stack direction="row" spacing={2}>
              <Item style={{ design: "flex" }}>
                {i}
                <Button
                  value={i}
                  onClick={removeItem}
                  style={{ padding: "0px" }}
                >
                  <CancelIcon />
                </Button>
              </Item>
            </Stack>
          ))}
        {flist.length > 0 && (
          <div style={{ justifyContent: "flex-end" }}>
            <Button
              onClick={clearfilter}
              style={{
                backgroundColor: "#3480EE",

                padding: "0px",
              }}
            >
              clear all
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
export default FilterBar
