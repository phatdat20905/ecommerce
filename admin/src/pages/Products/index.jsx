import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchBox from '../../components/SearchBox';
import { MyContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const columns = [
    { id: 'product', label: 'PRODUCT', minWidth: 150 },
    { id: 'category', label: 'CATEGORY', minWidth: 100 },
    { id: 'subCategory', label: 'SUB CATEGORY', minWidth: 150 },
    { id: 'price', label: 'PRICE', minWidth: 130 },
    { id: 'sales', label: 'SALES', minWidth: 100 },
    { id: 'stock', label: 'STOCK', minWidth: 100 },
    { id: 'rating', label: 'RATING', minWidth: 100 },
    { id: 'action', label: 'ACTION', minWidth: 120 },
];


const Products = () => {
    const context = useContext(MyContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [categoryFilterVal, setAge] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const handleChangeCatFilter = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className='flex items-center justify-between px-2 py-0 mt-3'>
                <h2 className="text-[18px] font-[600]">Products <span className="font-[400] text-[14px]"></span></h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button className='btn-blue !text-white btn-sm'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'product'
                        })}
                    >Add Product</Button>
                </div>
            </div>

            <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
                <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 w-full px-5 justify-beetween gap-4'>
                    <div className='col'>
                        <h4 className="font-[600] text-[13px] mb-2">Category By</h4>
                        <Select
                            className='w-full'
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="Category"
                            size='small'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Fashion</MenuItem>
                            <MenuItem value={20}>Electronics</MenuItem>
                            <MenuItem value={30}>Bags</MenuItem>
                            <MenuItem value={40}>Footwear</MenuItem>
                            <MenuItem value={50}>Groceries</MenuItem>
                            <MenuItem value={60}>Beauty</MenuItem>
                            <MenuItem value={70}>Wellness</MenuItem>
                            <MenuItem value={80}>Jewellery</MenuItem>
                        </Select>
                    </div>
                    <div className='col'>
                        <h4 className="font-[600] text-[13px] mb-2">Sub Category By</h4>
                        <Select
                            className='w-full'
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="SubCategory"
                            size='small'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Girls</MenuItem>
                            <MenuItem value={40}>Mobiles</MenuItem>
                            <MenuItem value={50}>Laptops</MenuItem>
                            <MenuItem value={60}>Smart Watch</MenuItem>
                            <MenuItem value={70}>Cameras</MenuItem>
                            <MenuItem value={80}>Men Bags</MenuItem>
                        </Select>
                    </div>
                    <div className='col'>
                        <h4 className="font-[600] text-[13px] mb-2">Third Level Sub Category By</h4>
                        <Select
                            className='w-full'
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={categoryFilterVal}
                            onChange={handleChangeCatFilter}
                            label="Category"
                            size='small'
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>T-SHirts</MenuItem>
                            <MenuItem value={20}>Casual Shirts</MenuItem>
                            <MenuItem value={30}>Blazers & Coats</MenuItem>
                            <MenuItem value={40}>Jeans</MenuItem>
                            <MenuItem value={50}>Kurtas & Suits</MenuItem>
                            <MenuItem value={60}>Sarees</MenuItem>
                            <MenuItem value={70}>Tops</MenuItem>
                            <MenuItem value={80}>Jeans</MenuItem>
                        </Select>
                    </div>
                    <div className='col w-full ml-auto flex items-center'>
                        <SearchBox />
                    </div>
                </div>
                <br />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox {...label} size="small" />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size="small" />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-4 w-[300px]'>
                                        <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group cursor-pointer'>
                                            <img alt="image" src="https://serviceapi.spicezgold.com/download/1743921851383_iphone-16-plus.png" className="w-full group-hover:scale-105 transition-all" />
                                        </div>
                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'>
                                                <Link to="/product/">Tran Viet Chinh...</Link>
                                                <br />
                                                <span className="text-[12px]">Bans</span>
                                            </h3>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Electronics
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Mobiles
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex gap-1 flex-col">
                                        <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">₹11,090,000.00</span>
                                        <span className="price text-primary text-[14px]  font-[600]">₹122,333,333.00</span>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[70px]"><span className="font-[600]">0</span> sale</p>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p className="text-[14px] w-[70px]"><span className="font-[600] text-primary">12</span></p>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </div>
        </>
    )
}

export default Products;