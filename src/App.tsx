import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import DeathReport from "./Pages/Reports/DeathReport";
import BirthReport from "./Pages/Reports/BirthReport";
import StudentsReport from "./Pages/Reports/StudentsReports";
import SkillsGap from "./Pages/Skills/Skills";

function App (){
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/death-report" element={<DeathReport/>}/>
        <Route path="/birth-reports" element={<BirthReport/>}/>
        <Route path="/student_report" element={<StudentsReport/>}/>
        <Route path="/skills_gap" element={<SkillsGap/>}/>
      </Routes>
     </Router>
  )
}

export default App