import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddHabitPage from "./pages/AddHabitPage";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-habit" element={<AddHabitPage />} />
      </Routes>
    </>
  );
}

export default App;
