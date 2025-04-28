import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skill from "../Components/Skill/Skill";
import MyProject from "../Components/MyProject/MyProject";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";

const MainSection = () => {
    return (
        <div>
            <div className="max-w-[93%] sm:max-w-[94%] md:max-w-[94%] lg:max-w-[92%] 2xl:max-w-[1600px] mx-auto">
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
