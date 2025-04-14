import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-[#0e172cf5]  rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://github.com/jisan-05"
                            className="text-4xl"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tanvirahmedjisan/"
                            className="text-4xl"
                            target="_blank"
                        >
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a
                            href="https://www.facebook.com/tanvir.ahmed.jisan.2024/"
                            className="text-4xl"
                            target="_blank"
                        >
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved by Jisan
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
