import { Routes, Route } from "react-router";
import { Layout, PrivateRoutes } from "./components";
import { Home, InvalidAddress, Login, Plants, Register } from "./pages";

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
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
