import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from 'react-icons/io5';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './style.css';
import { FiMinusSquare } from 'react-icons/fi';

const CategoryPanel = (props) => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCategoryPanel(newOpen);
    };
    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    };

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index);
        }
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
            <div className='scoll'>
                <ul className='w-full'>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className="w-full">
                            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Home</Button>
                        </Link>
                        {submenuIndex === 0 ? (
                            <FiMinusSquare className='absolute flex items-center justify-center top-[10px] right-[15px]  cursor-pointer'
                                onClick={() => openSubmenu(0)}
                            />) : (
                            <FaRegSquarePlus className='absolute flex items-center justify-center top-[10px] right-[15px]  cursor-pointer'
                                onClick={() => openSubmenu(0)}
                            />
                        )}

                        {submenuIndex === 0 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative'>
                                    <Link to='/' className="w-full">
                                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">Home</Button>
                                    </Link>
                                    {innerSubmenuIndex === 0 ? (
                                        <FiMinusSquare className='absolute flex items-center justify-center top-[10px] right-[15px]  cursor-pointer'
                                            onClick={() => openInnerSubmenu(0)}
                                        />) : (
                                        <FaRegSquarePlus className='absolute flex items-center justify-center top-[10px] right-[15px]  cursor-pointer'
                                            onClick={() => openInnerSubmenu(0)}
                                        />
                                    )}
                                    {innerSubmenuIndex === 0 && (
                                        <ul className='inner_submenu w-full pl-3'>
                                            <li className='list-none relative mb-1'>
                                                <Link to='/' className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    T-Shirts
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to='/' className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    T-Shirts
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to='/' className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    T-Shirts
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )
                        }


                    </li>

                </ul>
            </div>
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