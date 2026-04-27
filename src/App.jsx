import Dashboard from "./components/Dashboard";
import { projectsData } from "./data";
import "./App.css";
import { FaHome, FaCalendarAlt, FaCog, FaFileAlt } from "react-icons/fa";

export default function App() {
  return (
    <div className="layout">

    <div className="sidebar">
      
      {/* LOGO */}
      <div className="logo-section">
        <img src="./logo.png" alt="logo" className="logo" />
        <h2>Relawan Volunteer</h2>
      </div>

      {/* MENU */}
      <div className="menu">
        <div className="menu-item active">
          <FaHome className="icon" /> Dashboard
        </div>
        <div className="menu-item">
          <FaCalendarAlt className="icon" /> Riwayat Kegiatan
        </div>
        <div className="menu-item">
          <FaCog className="icon" /> Setting
        </div>
      </div>

    {/* BAWAH */}
    <div className="sidebar-bottom">
      <div className="menu-item keluar">
        <FaFileAlt className="icon" /> Keluar
    </div>
  </div>

  </div> 

  {/* MAIN */}
  <div className="main">
    <Dashboard projects={projectsData} />
  </div>

  </div>
  );
}
