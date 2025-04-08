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
    { id: 'image', label: 'IMAGE', minWidth: 250 },
    { id: 'categoryName', label: 'CATEGOEY NAME', minWidth: 100 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
];


const CategoryList = () => {
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
            <div className='flex items-center justify-between px-2 py-0 mt-1'>
                <h2 className="text-[18px] font-[600]">Category List <span className="font-[400] text-[14px]"></span></h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button className='btn-blue !text-white btn-sm'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add New Category'
                        })}
                    >ADD CATEGORY</Button>
                </div>
            </div>

            <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        width={300}
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
                                <TableCell width={100}>
                                    <div className='flex items-center gap-4 w-[50px]'>
                                        <div className='img w-full rounded-md overflow-hidden group'>
                                            <Link to="/">
                                                <img alt="image" src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png" className="w-full group-hover:scale-105 transition-all" />
                                            </Link>

                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell width={100}>
                                    Fashion
                                </TableCell>
                                <TableCell width={100}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px] ' />
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

export default CategoryList;