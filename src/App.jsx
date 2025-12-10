import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddHabitPage from "./pages/AddHabitPage";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const HandleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="font-quicksand overflow-hidden">
      <Layout onHandleToggleForm={HandleToggleForm} isForm={isFormVisible}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/add-habit"
            element={
              <AddHabitPage
                setIsForm={setIsFormVisible}
                isForm={isFormVisible}
              />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
