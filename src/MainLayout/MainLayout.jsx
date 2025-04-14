import React from "react";
import Home from "../Home/Home";
import "./MainLayout.css";
import MainSection from "../MainSection/MainSection";


const MainLayout = () => {
    return (
        <div className="">
            <div className="bg-1">
                <div className="max-w-[94%] md:max-w-[92%] mx-auto md:px-10 lg:px-20 flex items-center">
                    <Home></Home>
                </div>
            </div>
            <div className="bg-2">
                <div className="">
                    <MainSection></MainSection>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
