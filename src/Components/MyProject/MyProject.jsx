import React from "react";
import project1 from "../../assets/Project/project-1.png";

const MyProject = () => {
    return (
        <div className="pt-12 md:pt-36 mb-10">
            <h3 className="text-5xl text-center mb-16">My Project</h3>
            <div className="grid gird-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="card bg-base-100 w-full  shadow-sm">
                    <figure>
                        <img src={project1} alt="Project1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">CardCube Website</h2>
                        <p>
                            A crowdfunding website is a platform where people
                            can raise money for different projects, ideas, or
                            causes by inviting others to contribute financially.
                        </p>
                        <div className="card-actions">
                            <a
                                className="w-full"
                                target="_blank"
                                href="https://croudcube.netlify.app//"
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
                        <img src={project1} alt="Project1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">CardCube Website</h2>
                        <p>
                            A crowdfunding website is a platform where people
                            can raise money for different projects, ideas, or
                            causes by inviting others to contribute financially.
                        </p>
                        <div className="card-actions">
                            <a
                                className="w-full"
                                target="_blank"
                                href="https://scintillating-raindrop-41f4d5.netlify.app//"
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
                        <img src={project1} alt="Project1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">CardCube Website</h2>
                        <p>
                            A crowdfunding website is a platform where people
                            can raise money for different projects, ideas, or
                            causes by inviting others to contribute financially.
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
                <div className="card bg-base-100 w-full  shadow-sm">
                    <figure>
                        <img src={project1} alt="Project1" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">CardCube Website</h2>
                        <p>
                            A crowdfunding website is a platform where people
                            can raise money for different projects, ideas, or
                            causes by inviting others to contribute financially.
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
    );
};

export default MyProject;
