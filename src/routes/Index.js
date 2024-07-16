import { createBrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import AuthRoutes from "./AuthRoutes";

const router = createBrowserRouter([MainRoutes, AuthRoutes]);
export default router;
