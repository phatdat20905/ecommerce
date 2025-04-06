import React from "react";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default SideBar;