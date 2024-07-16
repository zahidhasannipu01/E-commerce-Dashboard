import AuthLayout from "../layout/AuthLayout";
import Login from "../views/Auth/Login/Login";
import Register from "../views/Auth/Register/Register";

const AuthRoutes = {
	path: "/auth",
	element: <AuthLayout />,
	children: [
		{
			path: "/auth/login",
			element: <Login />,
		},
		{
			path: "/auth/register",
			element: <Register />,
		},
	],
};

export default AuthRoutes;
