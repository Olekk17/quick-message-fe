import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../components/screens/HomeScreen/HomeScreen";
import { SignUpSuccessScreen } from "../components/screens/SignUpSuccessScreen/SignUpSuccessScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/signup-success",
    element: <SignUpSuccessScreen />
  },
]);
