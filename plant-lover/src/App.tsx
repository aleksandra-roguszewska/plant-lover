import { Routes, Route } from "react-router";
import { Layout, PrivateRoutes, Loader } from "./components";
import {
  AddPlant,
  Calendar,
  Cemetery,
  Home,
  InvalidAddress,
  Login,
  Plants,
  Profile,
  Register,
  Tasks,
} from "./pages";
import useAuth from "./context/AuthContext";

function App() {
  const { isAuth } = useAuth();

  if (isAuth === null) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Publiczne ściezki */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<InvalidAddress />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Ściezki prywatne */}
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/plants" element={<Plants />} />
          <Route path="/plants/addplant" element={<AddPlant />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/cemetry" element={<Cemetery />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
