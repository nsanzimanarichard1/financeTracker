import { Outlet } from "react-router-dom";
import Header from "../Components/Navbar/Header";
import Sidebar from "../Components/Siderbar/Sidebar";

import React from 'react'

const AppLaouts = () => {
  return (
    <div className="flex h-screen ">
        <Sidebar/>

        <div className="flex flex-col flex-1">
            <Header/>
            <main className="p-6 overflow-auto bg-gray-100 w-full h-screen space-y-2 text-center">
                <Outlet/>
            </main>
        </div>

    </div>
  )
}

export default AppLaouts