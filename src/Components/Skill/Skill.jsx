import React from "react";
import Marquee from "react-fast-marquee";
import html from "../../assets/technology/html.png";
import css from "../../assets/technology/css.png";
import tailwind from "../../assets/technology/tailwind.png";
import daisyui from "../../assets/technology/daisyui.png";
import js from "../../assets/technology/js.png";
import react from "../../assets/technology/react.png";
import node from "../../assets/technology/node.png";
import express from "../../assets/technology/express.png";
import mongodb from "../../assets/technology/mongodb.png";
import reactrouter from "../../assets/technology/reactrouter.png";
import firebase from "../../assets/technology/firebase.png";

// import github from "../../assets/technology/github.png";
// import git from "../../assets/technology/git.png";
// import jwt from "../../assets/technology/jwt.png";
// import figma from "../../assets/technology/figma.png";
// import gsap from "../../assets/technology/gsap.png";
// import vscode from "../../assets/technology/vscode.png";

const Skill = () => {
    return (
        <div>
            <div className="pt-14 md:pt-44 md:pb-44" id="skill">
                <div>
                    <h3 className="text-3xl md:text-[44px] text-center">
                        Skill
                    </h3>
                    <p className="max-w-11/12 md:max-w-1/2 mx-auto mt-10 md:text-center">
                        Proficient in HTML, CSS, JavaScript, and React.js, I
                        specialize in creating responsive and visually stunning
                        web applications. With a strong foundation in UI/UX
                        design and modern development tools, I bring ideas to
                        life with precision and creativity.
                    </p>
                </div>
                <div className="">
                    <h3 className="text-3xl text-center mt-10">
                        Front End Technology
                    </h3>
                    <div className="my-15 relative grid grid-cols-4 md:grid-cols-7 items-center justify-center">
                        <img
                            src={html}
                            alt=""
                            className="w-20 md:w-36 mx-auto  "
                        />
                        <img
                            src={css}
                            alt=""
                            className="w-20 md:w-36 mx-auto  "
                        />
                        <img
                            src={tailwind}
                            alt=""
                            className="w-20 md:w-46 mx-auto  "
                        />
                        <img
                            src={daisyui}
                            alt=""
                            className="w-20 md:w-36 mx-auto  "
                        />
                        <img
                            src={js}
                            alt=""
                            className="w-20 md:w-44 mx-auto "
                        />
                        <img
                            src={react}
                            alt=""
                            className="w-20 md:w-36 mx-auto "
                        />
                        <img
                            src={reactrouter}
                            alt=""
                            className="w-20 md:w-44 mx-auto "
                        />
                    </div>
                    <h3 className="text-3xl text-center mt-8">
                        Backend End Technology
                    </h3>
                    <div className="my-15 relative max-w-[900px] mx-auto grid grid-cols-4">
                        <img
                            src={node}
                            alt=""
                            className="w-20 md:w-36  mx-auto  "
                        />
                        <img
                            src={express}
                            alt=""
                            className="w-20 md:w-36  mx-auto  "
                        />
                        <img
                            src={mongodb}
                            alt=""
                            className="w-20 md:w-36  mx-auto  "
                        />
                        <img
                            src={firebase}
                            alt=""
                            className="w-16 md:w-30  mx-auto "
                        />
                    </div>
                </div>
            </div>
            <div className="divider my-0"></div>
        </div>
    );
};

export default Skill;
