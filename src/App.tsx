import { Route, Routes } from "react-router-dom";
import { useUser } from "./lib/contexts/user.context";
import HomePage from "./pages/auth/Home";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { user } = useUser();
  return (
    <Routes>
      <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
