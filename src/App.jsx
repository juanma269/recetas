import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./layout/Layout";
import RecipeList from "./pages/recipe/list/RecipeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route element={<Layout />}>
          <Route path="/" element={<RecipeList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
