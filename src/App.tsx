import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Users from "./pages/Users";
import MainLayout from "./components/Layouts/MainLayout";
import General from "./pages/General";
import Posts from "./pages/Posts";
import Stories from "./pages/Stories";
import Admins from "./pages/Admins";
import Settings from "./pages/Settings";
import PrivateRoutes from "./utils/PrivateRoutes";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<General />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/admins" element={<Admins />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
