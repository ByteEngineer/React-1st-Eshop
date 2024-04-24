import Card1 from "./components/Card2";
import Home from "./components/Home"
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/card" element={<Card1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
