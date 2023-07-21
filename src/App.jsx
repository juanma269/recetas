import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route
            key="test"
            path="/"
            element={<h1>hola mundo y chau</h1>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
