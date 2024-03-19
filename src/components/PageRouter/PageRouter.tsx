import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

export const PageRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};
