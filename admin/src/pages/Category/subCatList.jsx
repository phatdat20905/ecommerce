import React, { useContext, useEffect } from 'react';
import { Button } from '@mui/material';
import { MdExpandMore, MdEdit, MdDelete } from 'react-icons/md';
import { MyContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from '../../store/slices/categorySlice';
import { toast } from 'react-hot-toast';

const SubCategoryList = () => {
    const context = useContext(MyContext);
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Chuyển đổi dữ liệu thành dạng phân cấp
    const organizedCategories = categories.reduce((acc, cat) => {
        if (!cat.parent_id) {
            acc.push({
                ...cat,
                subCategories: categories.filter((subCat) => subCat.parent_id === cat.category_id),
                expanded: false,
            });
        }
        return acc;
    }, []);

    // Hàm xử lý mở rộng/thu gọn category
    const toggleExpand = (categoryId) => {
        context.setCategories(organizedCategories.map((cat) =>
            cat.category_id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
        ));
    };

    // Hàm xử lý khi click nút Delete
    const handleDelete = (categoryId) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            dispatch(deleteCategory(categoryId)).then((result) => {
                if (deleteCategory.fulfilled.match(result)) {
                    toast.success('Category deleted successfully');
                } else {
                    toast.error(result.payload.errMessage || 'Failed to delete category');
                }
            });
        }
    };

    return (
        <>
            <div className='flex items-center justify-between px-2 py-0 mt-1'>
                <h2 className="text-[18px] font-[600]">Sub Category List</h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button
                        className='btn-blue !text-white btn-sm'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add New Sub Category'
                        })}
                    >
                        ADD NEW SUB CATEGORY
                    </Button>
                </div>
            </div>
            <div className="card my-4 pt-5 pb-5 px-5 shadow-md sm:rounded-lg bg-white">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <ul className="w-full">
                    {organizedCategories.map((category) => (
                        <li key={category.category_id} className="w-full mb-1">
                            {/* Category */}
                            <div className="flex items-center w-full p-2 bg-[#f1f1f1] rounded-sm px-4">
                                <span className="font-[500] flex items-center gap-4 text-[14px]">
                                    {category.name}
                                </span>
                                <div className="flex items-center ml-auto gap-2">
                                    <Button
                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Edit Category',
                                            data: category,
                                        })}
                                    >
                                        <MdEdit />
                                    </Button>
                                    <Button
                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                        onClick={() => handleDelete(category.category_id)}
                                    >
                                        <MdDelete />
                                    </Button>
                                    <Button
                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                        onClick={() => toggleExpand(category.category_id)}
                                    >
                                        <MdExpandMore
                                            className={`transition-transform duration-300 ${category.expanded ? 'rotate-180' : ''}`}
                                        />
                                    </Button>
                                </div>
                            </div>

                            {/* Sub Categories */}
                            {category.expanded && (
                                <ul className="w-full">
                                    {category.subCategories.map((subCat) => (
                                        <li key={subCat.category_id} className="w-full py-1">
                                            <div className="w-100 flex items-center gap-3 p-0 px-4">
                                                <span className="font-[500] text-[14px]">{subCat.name}</span>
                                                <div className="flex items-center ml-auto gap-2">
                                                    <Button
                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                        onClick={() => context.setIsShowFullScreenPanel({
                                                            open: true,
                                                            model: 'Edit Sub Category',
                                                            data: subCat,
                                                        })}
                                                    >
                                                        <MdEdit />
                                                    </Button>
                                                    <Button
                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                        onClick={() => handleDelete(subCat.category_id)}
                                                    >
                                                        <MdDelete />
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SubCategoryList;