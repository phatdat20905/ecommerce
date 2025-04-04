import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from 'react-icons/io5';
import './style.css';
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCategoryPanel(newOpen);
    };



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
            <div className='p-3'>
                <img src="/logo.jpg" alt="Logo" className="w-[170px]" />
            </div>
            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop By Categories
                <IoCloseSharp className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)} />
            </h3>
            <CategoryCollapse />
        </Box>
    );

    return (
        <div>
            <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

export default CategoryPanel;