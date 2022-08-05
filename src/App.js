import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { TableCust } from "./pages/TableCust"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableCust></TableCust>}></Route>
      </Routes>
    </Router>
  )
}

export default App
