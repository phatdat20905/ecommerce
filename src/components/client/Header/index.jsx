import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Navigation from "./Navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {
    return (
        <header className="bg-white fixed lg:sticky left-0 w-full top-0 lg:-top-[47px] z-[101]">
            <div className="top-strip hidden lg:block py-2 border-t-[1px] border-gray-250  border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%] hidden lg:block">
                            <p className="text-[12px] font-[500] mt-0 mb-0">Get up to 50% off new season styles, limited time only</p>
                        </div>
                        <div className="col2 flex items-center justify-between w-full lg:w-[50%] lg:justify-end">
                            <ul className="flex items-center gap-3 w-full justify-between lg:w-[200px]">
                                <li className="list-none">
                                    <Link to='help-center' className="text-[11px] lg:text-[13px] link font-[500] transition">Help Center</Link>
                                </li>
                                <li className="list-none">
                                    <Link to='help-center' className="text-[11px] lg:text-[13px] link font-[500] transition">Order Tracking</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header py-2 lg:py-4 border-b-[1px] border-gray-250">
                <div className="container flex items-center justify-between">
                    <div className="col1 w-[40%] lg:w-[25%]">
                        <Link to='/'><img src="/logo.jpg" /></Link>
                    </div>
                    <div className="col2 w-[45%]">
                        <Search />
                    </div>
                    <div className="col3 w-[30% flex items-center">
                        <ul className="flex items-center justify-end gap-0 lg:gap-3 w-full">
                            <li className="list-none">
                                <Link className="link transition text-[15px] font-[500]" to="/login" data-discover="true">Login</Link> | &nbsp;
                                <Link className="link transition text-[15px]  font-[500]" to="/register" data-discover="true">Register</Link>
                            </li>
                            <li className="list-none">
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompare />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li className="list-none">
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                            <li className="list-none">
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <Navigation />
        </header>
    );
}

export default Header;