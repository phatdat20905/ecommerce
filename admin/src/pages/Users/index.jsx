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
import { MdOutlineMarkEmailRead, MdLocalPhone } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MyContext } from '../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const columns = [
    { id: 'user', label: 'USER', minWidth: 250 },
    { id: 'userPhone', label: 'USER PHONE NO', minWidth: 100 },
    { id: 'create', label: 'CREATE', minWidth: 150 },
    { id: 'action', label: 'ACTION', minWidth: 120 },
];


const Users = () => {
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
            <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
                <div className='flex items-center w-full px-5 pb-4 justify-beetween'>
                    <div class="col w-[40%]">
                        <h2 class="text-[18px] font-[600]">Users List</h2>
                    </div>
                    <div className='col w-[40%] ml-auto flex items-center gap-3'>
                        <SearchBox />
                    </div>
                </div>
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
                                        <div className='img w-[45px] h-[45px] rounded-md overflow-hidden group'>
                                            <img alt="image" src="/user.jpg" className="w-full group-hover:scale-105 transition-all" />
                                        </div>
                                        <div class="info flex flex-col gap-1">
                                            <span class="font-[500]"> mehak</span>
                                            <div class="flex items-center gap-1">
                                                <span class="flex items-center gap-2 w-[200px]">
                                                    <span>
                                                        <MdOutlineMarkEmailRead />
                                                    </span>
                                                    *********
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell width={150}>
                                    <span className='flex items-center gap-2'>
                                        <MdLocalPhone /> *********
                                    </span>
                                </TableCell>
                                <TableCell width={150}>
                                    <span className='flex items-center gap-2'>
                                        <FaRegCalendarAlt /> 2025-04-08
                                    </span>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Button variant="outlined" color="error">DELETE</Button>
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

            </div >
        </>
    )
}

export default Users;