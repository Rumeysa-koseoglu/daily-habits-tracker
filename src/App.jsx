import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AddHabitPage from "./pages/AddHabitPage";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  console.log(isFormVisible);

  const HandleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="font-quicksand overflow-hidden">
      <Layout onHandleToggleForm={HandleToggleForm}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/add-habit"
            element={
              <AddHabitPage
                setIsFormVisible={setIsFormVisible}
                isFormVisible={isFormVisible}
              />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
