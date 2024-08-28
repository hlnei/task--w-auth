import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalendarPage from "./CalendarPage";
import TaskPage from "./TaskPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tasks/:date" element={<TaskPage />} />
        <Route path="/" element={<LoginPage />} /> {/* Default route redirects to login */}
      </Routes>
    </Router>
  );
}

export default App;
