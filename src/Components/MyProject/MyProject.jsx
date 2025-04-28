import React, { useEffect } from "react";
import project1 from "../../assets/Project/project-1.png";
import project2 from "../../assets/Project/project-2 .png";
import project3 from "../../assets/Project/project-3.png";
import project4 from "../../assets/Project/project-4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const MyProject = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once while scrolling down
            delay: 100,
            disable: "mobile",
        });
    }, []);
    return (
        <div>
            <div className="pt-14 pb-14 md:pt-44 md:pb-44 " id="project">
                <h3 className="text-3xl md:text-[44px] text-center mb-16">
                    My Project
                </h3>
                <div
                    data-aos="fade-up"
                    className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project1} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Job Portal Website</h2>
                            <p>
                                A modern MERN stack job portal with user
                                registration, job posting, applications, and
                                smooth real-time performance.
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://job-portal-a-1852b.web.app/"
                                >
                                    {" "}
                                    <button className="btn bg-blue-600 hover:bg-blue-700 w-full">
                                        Go Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project2} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Restaurant Website </h2>
                            <p>
                                A stylish and user-friendly restaurant website
                                featuring menu highlights, reservation booking,
                                and contact info to enhance the dining
                                experience
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://bistro-boss-fced1.web.app/"
                                >
                                    {" "}
                                    <button className="btn bg-blue-600 hover:bg-blue-700 w-full">
                                        Go Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project3} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shop Website</h2>
                            <p>
                                A professional mobile shop website offering a
                                wide range of smartphones and accessories with
                                detailed specs, reviews, and shopping cart
                                functionality.
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://scintillating-raindrop-41f4d5.netlify.app/"
                                >
                                    {" "}
                                    <button className="btn bg-blue-600 hover:bg-blue-700 w-full">
                                        Go Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project4} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Gym Website</h2>
                            <p>
                                A dynamic and energetic gym website that
                                promotes fitness programs, trainer bios, class
                                schedules, and membership options
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://jisan-05.github.io/my-assignment-2/"
                                >
                                    {" "}
                                    <button className="btn bg-blue-600 hover:bg-blue-700 w-full">
                                        Go Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider my-0"></div>
        </div>
    );
};

export default MyProject;
