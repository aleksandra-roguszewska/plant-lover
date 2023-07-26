import { Routes, Route } from "react-router";
import { Layout, PrivateRoutes, Loader, Flex } from "./components";
import {
  AddPlant,
  Calendar,
  Cemetery,
  Home,
  InvalidAddress,
  Login,
  PlantPage,
  Plants,
  Profile,
  Register,
  Tasks,
} from "./pages";
import useAuth from "./context/AuthContext";

function App() {
  const { isAuth } = useAuth();

  if (isAuth === null) {
    return (
      <Flex $height="100vh" $alignitems="center" $justifycontent="center">
        <Loader />
      </Flex>
    );
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
          <Route path="/plants/:plantId" element={<PlantPage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/cemetery" element={<Cemetery />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
