import Stack from "@mui/material/Stack"
import CancelIcon from "@mui/icons-material/Cancel"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const FilterBar = (props) => {
  console.log(props.flist)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "2px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }))
  const clearfilter = () => props.setFlist([])

  const removeItem = (e) => {
    props.setFlist({
      ...props.flist,
      [e.target.id]: null,
    })
  }

  const size = Object.keys(props.flist).length
  // console.log(size)
  return (
    <>
      <div
        style={{
          backgroundColor: " #928E8D",
          display: "flex",
        }}
      >
        {size > 0 &&
          Object.keys(props.flist).map(
            (i, v) =>
              props.flist[i] !== null && (
                <Stack
                  key={i}
                  value={props.flist[i]}
                  direction="row"
                  spacing={2}
                >
                  <Item style={{ design: "flex" }}>
                    {props.flist[i]}
                    <Button
                      value={props.flist[i]}
                      id={[i]}
                      onClick={removeItem}
                      style={{ padding: "0px" }}
                    >
                      <CancelIcon value={props.flist[i]} id={[i]} />
                    </Button>
                  </Item>
                </Stack>
              )
          )}
        {props.flist.length > 0 && (
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
