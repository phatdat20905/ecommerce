import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FaRegSquarePlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FiMinusSquare } from 'react-icons/fi';
const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
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
    return (
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
    )
}

export default CategoryCollapse;