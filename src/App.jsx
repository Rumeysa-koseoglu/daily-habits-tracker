import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddHabitPage from "./pages/AddHabitPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className=" font-quicksand">
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-habit" element={<AddHabitPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
