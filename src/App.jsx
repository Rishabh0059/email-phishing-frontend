/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Recovery from "./components/Recovery";
import Recovery2 from "./components/Recovery2";
import Home from "./components/Home";


// import { motion, AnimatePresence } from "framer-motion";


function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Recovery />} />
      <Route path="/recovery2" element={<Recovery2 />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
    
  )
}

export default App
