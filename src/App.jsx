import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}
