import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
	return (
		<div className='w-screen h-screen'>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
