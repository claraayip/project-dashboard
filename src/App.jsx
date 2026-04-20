import Dashboard from "./components/Dashboard";
import { projectsData } from "./data";
import "./App.css";

export default function App() {
  return <Dashboard projects={projectsData} filter="All" role="admin" />;
}