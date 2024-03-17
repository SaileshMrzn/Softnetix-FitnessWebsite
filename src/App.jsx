import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Programs from "./components/Programs";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
