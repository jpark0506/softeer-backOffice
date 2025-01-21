import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/mainPage"
import RootContainer from "./container/rootContainer"

function App() {
  return (
    <RootContainer>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </RootContainer>
  )
}

export default App
