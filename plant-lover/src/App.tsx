import { Routes, Route } from "react-router";
import { Layout, PrivateRoutes } from "./components";
import {
  Calendar,
  Cemetery,
  Home,
  InvalidAddress,
  Login,
  Plants,
  Register,
  Tasks,
} from "./pages";

function App() {
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
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/cemetry" element={<Cemetery />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
