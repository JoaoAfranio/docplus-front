import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./assets/css/GlobalStyle";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import Profile from "./pages/Profile";
import Schedule from "./pages/Schedule";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />

              <Route path="/dashboard" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/patient" element={<Patient />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </UserProvider>
    </>
  );
}
