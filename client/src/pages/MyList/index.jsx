import React, { useState } from 'react';
import MyListItems from './MyListItems';
import AccountSideBar from '../../components/AccountSidebar';

const MyList = () => {

    return (
        <section className="py-4 lg:py-6 pb-20 w-full">
            <div className='container flex flex-col md:flex-row gap-5'>
                <div className='col1 w-full lg:w-[20%]'>
                    <AccountSideBar />
                </div>
                <div className='col2 w-full lg:w-[70%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
                            <h2>My List</h2>
                            <p className="mt-0 mb-0">
                                There are
                                <span className="font-bold text-primary"> 4 </span>
                                products in My List
                            </p>
                        </div>
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyList;