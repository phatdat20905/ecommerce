import React, { useContext } from 'react';
import { MyContext } from '../App';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';

const Layout = () => {
    const { isSidebarOpen } = useContext(MyContext);

    return (
        <section className="main">
            <Header />
            <div className="contentMain flex">
                <div className="sidebarWrapper">
                    <SideBar />
                </div>
                <div
                    className={`contentRight overflow-hidden py-20 px-5 transition-all duration-300 ${isSidebarOpen ? 'w-[80%] ml-[20%]' : 'w-full ml-0'
                        }`}
                >
                    <Dashboard />
                </div>
            </div>
        </section>
    );
};

export default Layout;