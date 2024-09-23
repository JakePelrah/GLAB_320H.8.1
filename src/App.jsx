import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies.jsx";
import Main from "./pages/Main.jsx";
import Price from "./pages/Price.jsx";
import Nav from "./components/Nav.jsx";
import './App.css'

export default function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        {/* <Route path="/price" element={<Price />} /> */}
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  )
}

