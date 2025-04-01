import Button from "@mui/material/Button";
import React, { useState } from "react";
import { GoRocket } from "react-icons/go";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
    const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCategoryPanel(true);
    };
    return (
        <>
            <nav className="navigation">
                <div className="container flex items-center justify-start lg:justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className="!text-black gap-2 w-full" onClick={() => openCategoryPanel()}>
                            <RiMenu2Fill className="text-[18px]" />
                            Shop By Categories
                            <LiaAngleDoubleDownSolid className="text-[14px] ml-auto font-bold" />
                        </Button>
                    </div>
                    <div className="col_2 w-full lg:w-[60%]">
                        <ul className="flex items-center gap-3 nav">
                            <li className="list-none">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Home</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Fashion</Button>
                                </Link>
                                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full relative">
                                            <Link to='/' className="w-full">
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">Men</Button>
                                                <div className="thirdLevel absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                    <ul>
                                                        <li className="list-none w-full">
                                                            <Link to='/' className="w-full">
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">T-Shirts</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="list-none w-full">
                                                            <Link to='/' className="w-full">
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">T-Shirts</Button>
                                                            </Link>
                                                        </li>
                                                        <li className="list-none w-full">
                                                            <Link to='/' className="w-full">
                                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">T-Shirts</Button>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Electronics</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Bags</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Footwear</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Groceries</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Beauty</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Wellness</Button>
                                </Link>
                            </li>
                            <li className="list-none relative">
                                <Link to='/' className="link transition text-[14px] font-[500]">
                                    <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">Jewellery</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col_3 w-[20%] hidden lg:block">
                        <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                            <GoRocket className="text-[18px]" />
                            Free International Delivery
                        </p>
                    </div>
                </div>
            </nav>

            {/* Category Panel Component */}
            <CategoryPanel
                isOpenCategoryPanel={isOpenCategoryPanel}
                setIsOpenCategoryPanel={setIsOpenCategoryPanel}
            />
        </>
    );
}

export default Navigation;