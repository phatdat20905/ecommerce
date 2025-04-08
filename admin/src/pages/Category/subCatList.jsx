import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { MdExpandMore, MdEdit, MdDelete } from 'react-icons/md';
import { MyContext } from '../../App';

const CategoryList = () => {
    const context = useContext(MyContext);
    // Dữ liệu phân cấp (category, sub-category, third-level category)
    const [categories, setCategories] = useState([
        {
            name: 'Fashion',
            subCategories: [
                {
                    name: 'Men',
                    thirdLevelCategories: [
                        { name: 'T-Shirts' },
                        { name: 'Casual Shirts' },
                        { name: 'Blazers & Coats' },
                        { name: 'Jeans' },
                    ],
                },
                {
                    name: 'Women',
                    thirdLevelCategories: [
                        { name: 'Kurtas & Suits' },
                        { name: 'Sarees' },
                        { name: 'Tops' },
                        { name: 'Jeans' },
                    ],
                },
                {
                    name: 'Girls',
                    thirdLevelCategories: [
                        { name: 'Tops' },
                        { name: 'Kurta Sets' },
                    ],
                },
            ],
            expanded: false, // Trạng thái mở rộng của category
        },
        // Bạn có thể thêm các category khác nếu cần
    ]);

    // Hàm xử lý mở rộng/thu gọn category
    const toggleExpand = (index) => {
        setCategories((prev) =>
            prev.map((cat, i) =>
                i === index ? { ...cat, expanded: !cat.expanded } : cat
            )
        );
    };

    // Hàm xử lý khi click nút Edit
    const handleEdit = (category, subCategory, thirdLevelCategory) => {
        console.log('Edit:', { category, subCategory, thirdLevelCategory });
        // Thêm logic chỉnh sửa (ví dụ: mở form chỉnh sửa)
    };

    // Hàm xử lý khi click nút Delete
    const handleDelete = (category, subCategory, thirdLevelCategory) => {
        console.log('Delete:', { category, subCategory, thirdLevelCategory });
        // Thêm logic xóa (ví dụ: gọi API để xóa)
    };

    return (
        <>
            <div className='flex items-center justify-between px-2 py-0 mt-1'>
                <h2 className="text-[18px] font-[600]">Sub Category List <span className="font-[400] text-[14px]"></span></h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button className='btn-blue !text-white btn-sm'
                        onClick={() => context.setIsShowFullScreenPanel({
                            open: true,
                            model: 'Add New Sub Category'
                        })}
                    >ADD NEW SUB CATEGORY</Button>
                </div>
            </div>
            <div className="card my-4 pt-5 pb-5 px-5 shadow-md sm:rounded-lg bg-white">
                <ul className="w-full">
                    {categories.map((category, catIndex) => (
                        <li key={catIndex} className="w-full mb-1">
                            {/* Category */}
                            <div className="flex items-center w-full p-2 bg-[#f1f1f1] rounded-sm px-4">
                                <span className="font-[500] flex items-center gap-4 text-[14px]">
                                    {category.name}
                                </span>
                                <Button
                                    className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black !ml-auto"
                                    onClick={() => toggleExpand(catIndex)}
                                >
                                    <MdExpandMore
                                        className={`transition-transform duration-300 ${category.expanded ? 'rotate-180' : ''
                                            }`}
                                    />
                                </Button>
                            </div>

                            {/* Sub Categories */}
                            {category.expanded && (
                                <ul className="w-full">
                                    {category.subCategories.map((subCat, subCatIndex) => (
                                        <li key={subCatIndex} className="w-full py-1">
                                            <div className="w-100 flex items-center gap-3 p-0 px-4">
                                                <span className="font-[500] text-[14px]">{subCat.name}</span>
                                                <div className="flex items-center ml-auto gap-2">
                                                    <Button
                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                        onClick={() =>
                                                            handleEdit(category.name, subCat.name, null)
                                                        }
                                                    >
                                                        <MdEdit />
                                                    </Button>
                                                    <Button
                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                        onClick={() =>
                                                            handleDelete(category.name, subCat.name, null)
                                                        }
                                                    >
                                                        <MdDelete />
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Third Level Categories */}
                                            <ul className="pl-4">
                                                {subCat.thirdLevelCategories.map(
                                                    (thirdLevelCat, thirdLevelIndex) => (
                                                        <li
                                                            key={thirdLevelIndex}
                                                            className="w-full hover:bg-[#f1f1f1]"
                                                        >
                                                            <div className="w-100 flex items-center gap-3 p-0 px-4">
                                                                <span className="font-[500] text-[14px]">
                                                                    {thirdLevelCat.name}
                                                                </span>
                                                                <div className="flex items-center ml-auto gap-2">
                                                                    <Button
                                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                                        onClick={() =>
                                                                            handleEdit(
                                                                                category.name,
                                                                                subCat.name,
                                                                                thirdLevelCat.name
                                                                            )
                                                                        }
                                                                    >
                                                                        <MdEdit />
                                                                    </Button>
                                                                    <Button
                                                                        className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                category.name,
                                                                                subCat.name,
                                                                                thirdLevelCat.name
                                                                            )
                                                                        }
                                                                    >
                                                                        <MdDelete />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
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

export default CategoryList;