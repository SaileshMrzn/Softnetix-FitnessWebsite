import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Programs from "./components/OurPrograms/Programs";
import Training from "./components/OurPrograms/Training";
import Workshop from "./components/OurPrograms/Workshop";
import WorkoutPlan from "./components/OurPrograms/WorkoutPlan";
import DietPlan from "./components/OurPrograms/DietPlan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/training" element={<Training />} />
          <Route path="/programs/workshop" element={<Workshop />} />
          <Route path="/programs/workout" element={<WorkoutPlan />} />
          <Route path="/programs/diet" element={<DietPlan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
