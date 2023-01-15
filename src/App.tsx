import { Route, Routes } from "react-router-dom";

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
    </Routes>
  );
};

export default App;
