import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
	return (
		<div className='flex'>
			<Sidebar />
			<div className=''>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
