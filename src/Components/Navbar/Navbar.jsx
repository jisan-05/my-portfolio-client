import React from "react";

const Navbar = () => {
    return (
        <div className="navbar shadow-sm pl-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden pl-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About Me</a>
                        </li>
                        <li >
                            <a href="#skill">Skill</a>
                        </li>
                        
                        <li>
                            <a href="#project">Project</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="text-xl md:text-4xl ">JISAN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#skill">Skill</a>
                    </li>
                    
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn p-2 md:p-4 bg-blue-600 hover:bg-blue-700">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;
