import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { TableCust } from "./pages/TableCust"
import Main from "./pages/Main"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </Router>
  )
}

export default App
