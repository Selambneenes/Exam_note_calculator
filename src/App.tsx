import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setup from "./pages/Setup";
import Home from "./pages/Setup";
import "./App.css";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Setup />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
