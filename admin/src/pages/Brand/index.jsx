import React, { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { MyContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands, deleteBrand } from '../../store/slices/brandSlice';
import { toast } from 'react-hot-toast';

const columns = [
    { id: 'image', label: 'IMAGE', minWidth: 250 },
    { id: 'brandName', label: 'BRAND NAME', minWidth: 100 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
];

const BrandList = () => {
    const context = useContext(MyContext);
    const dispatch = useDispatch();
    const { brands, loading, error } = useSelector((state) => state.brand);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchBrands());
    }, [dispatch]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = (brandId) => {
        if (window.confirm('Are you sure you want to delete this brand?')) {
            dispatch(deleteBrand(brandId)).then((result) => {
                if (deleteBrand.fulfilled.match(result)) {
                    toast.success('Brand deleted successfully');
                } else {
                    toast.error(result.payload.errMessage || 'Failed to delete brand');
                }
            });
        }
    };

    return (
        <>
            <div className='flex items-center justify-between px-2 py-0 mt-1'>
                <h2 className="text-[18px] font-[600]">Brand List</h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button
                        className='btn-blue !text-white btn-sm'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add New Brand'
                        })}
                    >
                        ADD BRAND
                    </Button>
                </div>
            </div>

            <div className='card my-4 pt-5 shadow-md sm:rounded-lg bg-white'>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
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
                            {brands
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((brand) => (
                                    <TableRow key={brand.brand_id}>
                                        <TableCell width={100}>
                                            <div className='flex items-center gap-4 w-[50px]'>
                                                <div className='img w-full rounded-md overflow-hidden group'>
                                                    <Link to="/">
                                                        <img
                                                            alt="image"
                                                            src={brand.image_url || "https://via.placeholder.com/50"}
                                                            className="w-full group-hover:scale-105 transition-all"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell width={100}>
                                            {brand.name}
                                        </TableCell>
                                        <TableCell width={100}>
                                            <div className='flex items-center gap-1'>
                                                <Button
                                                    className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'
                                                    onClick={() => context.setIsShowFullScreenPanel({
                                                        open: true,
                                                        model: 'Edit Brand',
                                                        data: brand,
                                                    })}
                                                >
                                                    <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                </Button>
                                                <Button
                                                    className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'
                                                    onClick={() => handleDelete(brand.brand_id)}
                                                >
                                                    <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={brands.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </>
    );
};

export default BrandList;