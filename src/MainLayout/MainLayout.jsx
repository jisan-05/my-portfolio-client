import React from "react";
import Home from "../Home/Home";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <div className="">
            <div className="bg-1">
                <div className="max-w-[92%] mx-auto px-3 md:px-10 lg:px-20 flex items-center">
                    <Home></Home>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
