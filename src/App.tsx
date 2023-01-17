import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/auth.hooks";
import { useUser } from "./lib/contexts/user.context";
import Register from "./pages/Register";

const App = () => {
  const userContext = useUser();
  useAuth(userContext);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Hello World!</h1>
          </div>
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
