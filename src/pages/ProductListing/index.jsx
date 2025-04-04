import React, { useState } from 'react';
import Sidebar from '../../components/client/Sidebar';
import ProductItem from '../../components/client/ProductItem';
import ProductItemListView from '../../components/client/ProductItemListView';
import Button from '@mui/material/Button';
import { IoGridSharp } from 'react-icons/io5';
import { LuMenu } from 'react-icons/lu';;
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./style.css";
const ProductListing = () => {
    const [itemView, setIsItemView] = useState('list');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section className="pb-0">
            <div className='bg-white p-2'>
                <div className='container flex gap-3'>
                    <div className='sidebarWrapper fixed -bottom-[100%] left-0 w-fulllg:h-full lg:static lg:w-[20%] bg-white z-[102] lg:z-[100] p-3 lg:p-0  transition-all lg:opacity-100 opacity-0 '>
                        <Sidebar />
                    </div>
                    <div className='rightContent w-full lg:w-[80%] py-3'>
                        <div className='bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between sticky top-[135px] z-[99]'>
                            <div className='col1 flex items-center itemViewActions'>
                                <div>
                                    <Button className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] ${itemView === 'list' && 'active !bg-[#dfdfdf]'}`}
                                        onClick={() => setIsItemView('list')}
                                    >
                                        <LuMenu className='text-[rgba(0,0,0,0.7)] text-[16px]' />
                                    </Button>
                                    <Button className={`!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] ${itemView === 'gird' && 'active !bg-[#dfdfdf]'}`}
                                        onClick={() => setIsItemView('gird')}
                                    >
                                        <IoGridSharp className='text-[rgba(0,0,0,0.7)] text-[14px]' />
                                    </Button>
                                    <span className="text-[14px] hidden sm:block md:block lg:block font-[500] pl-3 text-[rgba(0,0,0,0.7)]">There are 23  products.</span>
                                </div>
                            </div>
                            <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">Sort By</span>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000]'
                                >
                                    Dashboard
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Sales, highest to lowest</MenuItem>
                                    <MenuItem onClick={handleClose}>Relevance</MenuItem>
                                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                                    <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                        <div className={`grid ${itemView === 'list' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'}  gap-4`}>
                            {
                                itemView === 'gird' ?
                                    <>
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                        <ProductItem />
                                    </>
                                    :
                                    <>
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                        <ProductItemListView />
                                    </>
                            }

                        </div>
                        <div className='flex items-center justify-center mt-4'>
                            <Pagination count={10} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductListing;