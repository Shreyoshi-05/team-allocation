import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";
import Other from "./components/Other";
import Nav from "./components/Nav";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [selectedteam, setSelectedteam] = useState("Team Alpha");

  const [employe, setEmploy] = useState([
    {
      fullname: "John Smith",
      designation: "Software Engineer",
      id: "001",
      gender: "Male",
      team: "Team Charlie",
    },
    {
      fullname: "Jane Doe",
      designation: "Product Manager",
      id: "002",
      gender: "Female",
      team: "Team Bravo",
    },
    {
      fullname: "Michael Brown",
      designation: "Data Analyst",
      id: "003",
      gender: "Male",
      team: "Team Alpha",
    },
    {
      fullname: "Emily Davis",
      designation: "UX Designer",
      id: "004",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "Daniel Wilson",
      designation: "DevOps Engineer",
      id: "005",
      gender: "Male",
      team: "Team Delta",
    },
    {
      fullname: "Olivia Johnson",
      designation: "Quality Assurance",
      id: "006",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "Liam Martinez",
      designation: "Backend Developer",
      id: "007",
      gender: "Male",
      team: "Team Bravo",
    },
    {
      fullname: "Sophia Thompson",
      designation: "Frontend Developer",
      id: "008",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "William Garcia",
      designation: "IT Support",
      id: "009",
      gender: "Male",
      team: "Team Charlie",
    },
    {
      fullname: "Ava Martinez",
      designation: "Project Coordinator",
      id: "010",
      gender: "Female",
      team: "Team Alpha",
    },
    {
      fullname: "James Robinson",
      designation: "Business Analyst",
      id: "011",
      gender: "Male",
      team: "Team Charlie",
    },
    {
      fullname: "Isabella Lee",
      designation: "HR Manager",
      id: "012",
      gender: "Female",
      team: "Team Bravo",
    },
    {
      fullname: "Alexander Moore",
      designation: "Technical Lead",
      id: "013",
      gender: "Male",
      team: "Team Alpha",
    },
    {
      fullname: "Mia Harris",
      designation: "Content Strategist",
      id: "014",
      gender: "Female",
      team: "Team Delta",
    },
    {
      fullname: "Ethan King",
      designation: "Marketing Specialist",
      id: "015",
      gender: "Male",
      team: "Team Delta",
    },
    {
      fullname: "Charlotte White",
      designation: "Database Administrator",
      id: "016",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "Benjamin Martin",
      designation: "Cloud Architect",
      id: "017",
      gender: "Male",
      team: "Team Charlie",
    },
    {
      fullname: "Amelia Lewis",
      designation: "Cybersecurity Analyst",
      id: "018",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "Lucas Walker",
      designation: "UI/UX Developer",
      id: "019",
      gender: "Male",
      team: "Team Delta",
    },
    {
      fullname: "Harper Young",
      designation: "Product Designer",
      id: "020",
      gender: "Female",
      team: "Team Alpha",
    },
    {
      fullname: "Henry Hall",
      designation: "Operations Manager",
      id: "021",
      gender: "Male",
      team: "Team Alpha",
    },
    {
      fullname: "Ella Scott",
      designation: "Network Engineer",
      id: "022",
      gender: "Female",
      team: "Team Bravo",
    },
    {
      fullname: "Sebastian Adams",
      designation: "Solutions Architect",
      id: "023",
      gender: "Male",
      team: "Team Charlie",
    },
    {
      fullname: "Abigail Nelson",
      designation: "Finance Manager",
      id: "024",
      gender: "Female",
      team: "Team Alpha",
    },
    {
      fullname: "Logan Carter",
      designation: "Supply Chain Analyst",
      id: "025",
      gender: "Male",
      team: "Team Echo",
    },
    {
      fullname: "Grace Mitchell",
      designation: "Scrum Master",
      id: "026",
      gender: "Female",
      team: "Team Alpha",
    },
    {
      fullname: "Jackson Perez",
      designation: "SEO Specialist",
      id: "027",
      gender: "Male",
      team: "Team Bravo",
    },
    {
      fullname: "Chloe Roberts",
      designation: "Social Media Manager",
      id: "028",
      gender: "Female",
      team: "Team Charlie",
    },
    {
      fullname: "Levi Evans",
      designation: "Customer Support",
      id: "029",
      gender: "Male",
      team: "Team Delta",
    },
    {
      fullname: "Avery Turner",
      designation: "Technical Writer",
      id: "030",
      gender: "Female",
      team: "Team Delta",
    },
  ]);

  function handelTeamselection(e) {
    setSelectedteam(e.target.value);
  }

  function handelEmpleeCardClick(e) {
    const transformArray = employe.map((emp) =>
      emp.id == parseInt(e.target.id)
        ? emp.team === selectedteam
          ? { ...employe, team: " " }
          : { ...employe, team: selectedteam }
        : emp
    );

    setEmploy(transformArray);
  }

  return (
    <>
      

      
      <BrowserRouter>

      <Nav></Nav>
      <Header selectedteam={selectedteam} teamlength={employe.filter((emp) => emp.team == selectedteam).length}/>
        <Routes>

          <Route path="/" element={<Employee
                selectedteam={selectedteam}
                employe={employe}
                handelTeamselection={handelTeamselection}
                handelEmpleeCardClick={handelEmpleeCardClick} />}></Route>

          <Route path="/other" element={<Other employe={employe} selectedteam={selectedteam} setSelectedteam={setSelectedteam} />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
