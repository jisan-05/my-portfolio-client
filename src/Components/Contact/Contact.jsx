import React from "react";
import {
    FaFacebook,
    FaGithub,
    FaInbox,
    FaLinkedin,
    FaVoicemail,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="my-30">
            <h2 className=" text-5xl text-center mb-16">Contact With Me</h2>
            <div className="flex justify-around">
                <div className="w-[40%]">
                    <h3 className="text-3xl mb-3">Contact details</h3>
                    <div>
                        <p>
                            <MdEmail className="inline text-2xl"></MdEmail>{" "}
                            zishantanvir05@gmail.com
                        </p>
                    </div>
                    <h3 className="text-3xl mt-8 mb-3">Social </h3>
                    <div className="flex gap-3">
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
                        <a
                            href="https://github.com/jisan-05"
                            className="text-4xl"
                            target="_blank"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="w-[40%]">
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="fieldset-label mb-1">
                                Name :
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="input w-full"
                            />
                        </div>
                        <div>
                            <label className="fieldset-label mb-1">
                                Email :
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="input w-full"
                            />
                        </div>
                    </div>
                    <div className="">
                        <label className="fieldset-label mb-1">
                            Message :{" "}
                        </label>
                        <input
                            type="text"
                            placeholder="Type Your Message "
                            className="textarea w-full"
                        />
                    </div>
                    <button className="btn bg-blue-600 hover:bg-blue-700 w-full mt-5">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
