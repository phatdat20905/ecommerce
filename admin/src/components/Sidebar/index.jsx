import Button from "@mui/material/Button";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaRegImage, FaUsers, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { Collapse } from 'react-collapse';
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";

const SideBar = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);

    const isOpenSubMenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index);
        }
    }

    const context = useContext(MyContext);
    return (
        <>
            <div className={`sidebar fixed top-0 left-0 z-[52] bg-[#fff] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4
                w-[20%] transition-transform duration-300 ${context.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className="py-2 w-full">
                    <Link to={"/"}>
                        <img src="https://serviceapi.spicezgold.com/download/1741660733567_logo.jpg" className="w-[170px] md:min-w-[200px]" />
                    </Link>
                </div>
                <ul className="mt-4 overflow-y-scroll max-h-[80vh]">
                    <li>
                        <Link to="/">
                            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                                <RxDashboard className="text-[18px]" />
                                <span>Dashboard</span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <FaRegImage className="text-[18px]" />
                            <span>Home Slides</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(1)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 1 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/homeSlider/list"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Home Banners List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Button
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Add Home Slide'
                                        })}
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                        Add Home Banner Slide
                                    </Button>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <BiCategory className="text-[18px]" />
                            <span>Category</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(2)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 2 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/category/list"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Category List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Button
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Add New Category'
                                        })}
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                        Add A Category
                                    </Button>
                                </li>
                                <li className="w-full">
                                    <Link to={"/subCategory/list"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Sub Category List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Button
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Add New Sub Category'
                                        })}
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                        Add A Sub Category
                                    </Button>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <BiCategory className="text-[18px]" />
                            <span>Brand</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(2)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 2 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/brand/list"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Brand List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Button
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Add New Brand'
                                        })}
                                        className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                        Add A Brand
                                    </Button>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <RiProductHuntLine className="text-[18px]" />
                            <span>Products</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(3)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 3 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/products"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Product List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                                        onClick={() => context.setIsShowFullScreenPanel({
                                            open: true,
                                            model: 'Add Product'
                                        })}
                                    >
                                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                        Product Upload
                                    </Button>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Product RAMS
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Product WEIGHT
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Product SIZE
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Link to="/users">
                            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                                <FaUsers className="text-[18px]" />
                                <span>Users</span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                                <BsBagCheck className="text-[18px]" />
                                <span>Orders</span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <RiProductHuntLine className="text-[18px]" />
                            <span>Banners</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(4)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 4 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Home Banner List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Home Banner
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Home Banner List 2
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Banner
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <RxDashboard className="text-[18px]" />
                            <span>Blogs</span>
                            <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"
                                onClick={() => isOpenSubMenu(5)}
                            >
                                <FaAngleDown className="transition-all " />
                            </span>
                        </Button>
                        <Collapse isOpened={submenuIndex === 5 ? true : false}>
                            <ul className="w-full">
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Blog List
                                        </Button>
                                    </Link>
                                </li>
                                <li className="w-full">
                                    <Link to={"/"}>
                                        <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                                            <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                                            Add Blog
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <RxDashboard className="text-[18px]" />
                            <span>Manage Logo</span>
                        </Button>
                    </li>
                    <li>
                        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                            <IoMdLogOut className="text-[18px]" />
                            <span>Logout</span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideBar;