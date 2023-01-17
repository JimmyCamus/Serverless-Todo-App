import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
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
      <Route
      path="/register"
        element={
          <Register />
        }
      />
    </Routes>
  );
};

export default App;
