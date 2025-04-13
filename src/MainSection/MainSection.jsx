import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skill from "../Components/Skill/Skill";
import MyProject from "../Components/MyProject/MyProject";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";

const MainSection = () => {
    return (
        <div>
            <div className="max-w-[96%] md:max-w-[92%] mx-auto md:px-10 lg:px-20">
                <AboutMe></AboutMe>
                <Skill></Skill>
                <MyProject></MyProject>
                <Contact></Contact>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainSection;
