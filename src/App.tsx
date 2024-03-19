import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App: React.FC = () => (
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
