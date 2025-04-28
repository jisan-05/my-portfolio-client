import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    FaFacebook,
    FaGithub,
    FaInbox,
    FaLinkedin,
    FaVoicemail,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const sendMessage = {
            name,
            email,
            message,
        };

        const { data } = await axios.post(
            "https://my-portfolio-server-chi-two.vercel.app/client-message",
            sendMessage
        );
        

        if (data.acknowledged) {
            toast.success("message send successful");

            e.target.reset();
            setLoading(false);
        }
    };

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
            <Toaster></Toaster>
            <div className="pt-14 md:pt-44 md:pb-44" id="contact">
                <h2 className=" text-3xl md:text-[44px] text-center mb-16">
                    Contact With Me
                </h2>
                <div className="md:flex justify-around">
                    <div data-aos="fade-right" className="md:w-[40%]">
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
                    <div className="divider lg:divider-horizontal"></div>
                    <form
                        onSubmit={handleSubmit}
                        data-aos="fade-left"
                        className="md:w-[40%]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="fieldset-label mb-1">
                                    Name :
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter Name"
                                    className="input w-full"
                                />
                            </div>
                            <div>
                                <label className="fieldset-label mb-1">
                                    Email :
                                </label>
                                <input
                                    type="email"
                                    required
                                    name="email"
                                    placeholder="Enter Email"
                                    className="input w-full"
                                />
                            </div>
                        </div>
                        <div className="">
                            <label className="fieldset-label mb-1">
                                Message :{" "}
                            </label>
                            <textarea
                                type="text"
                                name="message"
                                required
                                placeholder="Type Your Message "
                                className="textarea w-full"
                            />
                        </div>
                        {loading ? (
                            <button className="btn bg-blue-600 hover:bg-blue-700 w-full mt-5">
                                Submit{" "}
                                <span className="loading loading-infinity loading-xl"></span>
                            </button>
                        ) : (
                            <button className="btn bg-blue-600 hover:bg-blue-700 w-full mt-5">
                                Submit
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
