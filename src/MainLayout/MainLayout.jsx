import React from "react";
import Home from "../Home/Home";
import "./MainLayout.css";
import MainSection from "../MainSection/MainSection";

const MainLayout = () => {
    return (
        <div className="">
            <div className="bg-1">
                <div className="max-w-[93%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto flex items-center">
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
