import React from "react";
import { TypeAnimation } from "react-type-animation";
import me from "../../assets/me.jpg";
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin, FaLongArrowAltDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="md:max-w-10/12 h-[700px] mx-auto md:flex items-center ">
            <div className="md:w-1/2 space-y-5">
                <div className="text-3xl md:text-5xl font-semibold">
                    Hi, I’m{" "}
                    <TypeAnimation
                        sequence={[
                            "Tanvir Ahmed Jisan",
                            1800,
                            "Web Developer",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="text-3xl md:text-5xl text-blue-500" // <-- Only changing word has this style
                        repeat={Infinity}
                    />
                </div>
                <p>
                    I'm Mehefuj Ali, a passionate Frontend Developer and
                    aspiring Full-Stack Developer from India. My goal is to
                    build impactful, user-friendly web applications. I have
                    expertise in HTML, CSS, JavaScript, React, Node.js, Express,
                    and MongoDB. Currently, I’m focused on expanding my skills
                    and exploring new tools and technologies. I strive to create
                    beautiful, responsive, and functional websites that deliver
                    exceptional user experiences.
                </p>
                <div className="flex gap-3">
                <a href="https://github.com/jisan-05" className="text-4xl" target="_blank"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/tanvirahmedjisan/" className="text-4xl" target="_blank"><FaLinkedin></FaLinkedin></a>
                <a href="https://www.facebook.com/tanvir.ahmed.jisan.2024/" className="text-4xl" target="_blank"><FaFacebook></FaFacebook></a>
                </div>
                <div>
                  <button className="btn p-6 bg-blue-600 hover:bg-blue-700 hover:translate-y-[3px] transition-all duration-400">Download Resume <FaArrowDown  /></button>
                </div>
            </div>
            <div className="md:w-1/2 ">
                <img
                    className="w-[420px] h-[420px] rounded-[50%] mx-auto border-blue-900 border-4"
                    src={me}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
