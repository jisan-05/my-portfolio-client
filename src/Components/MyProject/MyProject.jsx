import React from "react";
import project1 from "../../assets/Project/project-1.png";
import project2 from "../../assets/Project/project-2.png";
import project3 from "../../assets/Project/project-3.png";
import project4 from "../../assets/Project/project-4.png";

const MyProject = () => {
    return (
        <div>
            <div className="pt-14 pb-14 md:pt-44 md:pb-44 " id="project">
                <h3 className="text-3xl md:text-[44px] text-center mb-16">
                    My Project
                </h3>
                <div className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project1} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Ecommerce Website</h2>
                            <p>
                                A crowdfunding website is a platform where
                                people can raise money for different projects,
                                ideas, or causes by inviting others to
                                contribute financially.
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://jisan-05.github.io/Bootstrap-ecommerce-project/"
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
                            <h2 className="card-title">Tech Website</h2>
                            <p>
                                A crowdfunding website is a platform where
                                people can raise money for different projects,
                                ideas, or causes by inviting others to
                                contribute financially.
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
                            <img src={project3} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Gym Website</h2>
                            <p>
                                A crowdfunding website is a platform where
                                people can raise money for different projects,
                                ideas, or causes by inviting others to
                                contribute financially.
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
                    <div className="card bg-base-100 w-full  shadow-sm">
                        <figure>
                            <img src={project4} alt="Project1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Croudcube Website</h2>
                            <p>
                                A crowdfunding website is a platform where
                                people can raise money for different projects,
                                ideas, or causes by inviting others to
                                contribute financially.
                            </p>
                            <div className="card-actions">
                                <a
                                    className="w-full"
                                    target="_blank"
                                    href="https://crowdcube-client.onrender.com/"
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
