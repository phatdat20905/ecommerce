import React, { useState, PureComponent, useContext } from 'react';
import DashboardBoxex from '../../components/DashboardBoxes';
import Button from '@mui/material/Button';
import { LuPlus } from "react-icons/lu";
import Badge from '../../components/Badge';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IoSearchOutline } from "react-icons/io5";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SearchBox from '../../components/SearchBox';
import { MyContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const columns = [
    { id: 'product', label: 'PRODUCT', minWidth: 150, align: 'left' },
    { id: 'category', label: 'CATEGORY', minWidth: 100, align: 'left' },
    { id: 'subCategory', label: 'SUB CATEGORY', minWidth: 150, align: 'left' },
    { id: 'price', label: 'PRICE', minWidth: 130, align: 'left' },
    { id: 'sales', label: 'SALES', minWidth: 100, align: 'left' },
    { id: 'stock', label: 'STOCK', minWidth: 100, align: 'left' },
    { id: 'rating', label: 'RATING', minWidth: 100, align: 'left' },
    { id: 'action', label: 'ACTION', minWidth: 120, align: 'left' },
];

const Dashboard = () => {
    const context = useContext(MyContext);
    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [categoryFilterVal, setCategoryFilter] = useState('');
    const [chart1Data, setChart1Data] = useState([
        {
            name: 'Page A',
            TotalSales: 4000,
            TotalUsers: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            TotalSales: 3000,
            TotalUsers: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            TotalSales: 2000,
            TotalUsers: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            TotalSales: 2780,
            TotalUsers: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            TotalSales: 1890,
            TotalUsers: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            TotalSales: 2390,
            TotalUsers: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            TotalSales: 3490,
            TotalUsers: 4300,
            amt: 2100,
        },
    ]);

    const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null);
        } else {
            setIsOpenOrderProduct(index);
        }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const handleChangeCatFilter = (event) => {
        setCategoryFilter(event.target.value);
    };

    return (

        <>
            <div className='w-full py-4 lg:py-1 px-5 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
                <div className='info'>
                    <h1 className="text-[26px] lg:text-[35px] font-bold leading-8 lg:leading-10 mb-3">
                        Welcome,
                        <br />
                        <span className="text-primary">
                            idol tiktok
                        </span>
                    </h1>
                    <p>Here’s What happening on your store today. See the statistics at once.</p>
                    <br />
                    <Button className='btn-blue btn !capitalize'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add Product'
                        })}
                    >
                        <LuPlus /> Add Product
                    </Button>
                </div>
                <img src="/shop-illustration.webp" className="w-[250px] hidden lg:block" />
            </div>
            <DashboardBoxex />
            <div className='flex items-center justify-between px-2 py-0 mt-5'>
                <h2 class="text-[18px] font-[600]">Products <span class="font-[400] text-[14px]"></span></h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button className='btn-blue !text-white'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add Product'
                        })}
                    >Add Product</Button>
                </div>
            </div>

            <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
                <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 w-full px-5 justify-beetween gap-4'>
                    <div className='col'>
                        <h4 class="font-[600] text-[13px] mb-2">Category By</h4>
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
                        <h4 class="font-[600] text-[13px] mb-2">Sub Category By</h4>
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
                        <h4 class="font-[600] text-[13px] mb-2">Third Level Sub Category By</h4>
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
                                            <img alt="image" src="https://serviceapi.spicezgold.com/download/1743921851383_iphone-16-plus.png" class="w-full group-hover:scale-105 transition-all" />
                                        </div>
                                        <div className='info w-[75%]'>
                                            <h3 className='font-[600] text-[12px] leading-4 hover:text-primary'>
                                                <Link to="/product/">Tran Viet Chinh...</Link>
                                                <br />
                                                <span class="text-[12px]">Bans</span>
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
                                    <div class="flex gap-1 flex-col">
                                        <span class="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">₹11,090,000.00</span>
                                        <span class="price text-primary text-[14px]  font-[600]">₹122,333,333.00</span>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p class="text-[14px] w-[70px]"><span class="font-[600]">0</span> sale</p>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <p class="text-[14px] w-[70px]"><span class="font-[600] text-primary">12</span></p>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <AiOutlineEdit />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <FaRegEye />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <GoTrash />
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
            <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-5 flex-col sm:flex-row'>
                    <h2 class="text-[18px] font-[600] text-left mb-2 lg:mb-0">Recent Orders</h2>
                    <div className='ml-auto w-full'>
                        <div className='w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
                                placeholder="Search here..."
                                value="" />
                        </div>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    &nbsp;
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Payment ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Products
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    PINCODE
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Total Amount
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    User Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Status
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4 font-[500]">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                        onClick={() => isShowOrderProduct(0)}
                                    >
                                        {
                                            isOpenOrderProduct === 0 ? (
                                                <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                            ) : (
                                                <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                            )
                                        }

                                    </Button>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">sdgfhjfdgsdfg</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <Badge status="delivered" />
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                            </tr>
                            {
                                isOpenOrderProduct === 0 &&
                                <tr>
                                    <td className="pl-20" colSpan={6}>
                                        <div className="relative overflow-x-auto shadow-md">
                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Product Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Product Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Image
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            SubTotal
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 font-[500] dark:text-white">
                                                            <span className="text-gray-500">234242525</span>
                                                        </th>
                                                        <td className="px-6 py-4 font-[500]">
                                                            <span className="text-gray-500">gsghdg</span>
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                                                className="w-[80px] h-[80px] object-cover rounded-md"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            $2999
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            $2999
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
                <div class="flex items-center justify-between px-5 py-5 pb-0">
                    <h2 class="text-[18px] font-[600]">Total Users &amp; Total Sales</h2>
                </div>
                <div class="flex items-center gap-5 px-5 py-5 pt-1">
                    <span class="flex items-center gap-1 text-[15px] cursor-pointer">
                        <span class="block w-[8px] h-[8px] rounded-full bg-primary "></span>
                        Total Users
                    </span>
                    <span class="flex items-center gap-1 text-[15px] cursor-pointer">
                        <span class="block w-[8px] h-[8px] rounded-full bg-green-600  "></span>
                        Total Sales
                    </span>
                </div>
                <LineChart
                    width={800}
                    height={500}
                    data={chart1Data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='none' />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="TotalSales" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={3} />
                    <Line type="monotone" dataKey="TotalUsers" stroke="#82ca9d" strokeWidth={3} />
                </LineChart>
            </div>
        </>
    );
}

export default Dashboard;