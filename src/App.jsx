import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
