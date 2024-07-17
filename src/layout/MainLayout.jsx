import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import SidebarMobile from "../components/Sidebar/mobile/SidebarMobile";

const MainLayout = () => {
	return (
		<div className='flex'>
			<div className='hidden md:block xl:block 2xl:block'>
				<Sidebar />
			</div>
			<div className='block md:hidden xl:hidden 2xl:hidden'>
				{" "}
				<SidebarMobile />
			</div>

			<div className=''>
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
