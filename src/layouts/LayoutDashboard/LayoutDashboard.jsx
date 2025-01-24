// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const LayoutDashboard = () => {
  return (
    <div className="flex min-h-screen bg-blueLight">
      <aside className="flex flex-col  items-center justify-center gap-4 mx-2 w-8 lg:w-40 xl:w-72">
        <Sidebar />
      </aside>
      <main className="flex-1 my-4 mr-4 ml-2 bg-white rounded-lg  shadow-2xl">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutDashboard;
