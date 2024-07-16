import MainLayout from "../layout/MainLayout";
import Dashboard from "../views/Dashboard/Dashboard";

const MainRoutes = {
	path: "/",
	element: <MainLayout />,
	children: [
		{
			path: "/",
			element: <Dashboard />,
		},
	],
};

export default MainRoutes;
