import React, { useEffect } from "react";
import Lottie from "lottie-react";
import laptopAnimation from "../../assets/laptop-animation.json";
import AOS from "aos";
import "aos/dist/aos.css";



const AboutMe = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once while scrolling down
            delay: 100,
            disable: "mobile",
        });
    }, []);

    return (
        <div className="overflow-x-hidden">
            <div className="pt-14 pb-14 md:pt-44 md:mb-44" id="about">
                <div className="text-center ">
                    <h3 className="text-3xl md:text-[44px] text-center">
                        About Me{" "}
                    </h3>
                    <p className="text-center mt-4 md:mt-8">
                        Learn more about me
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-14 px-2">
                    <div
                        data-aos="fade-right"
                        className="w-full lg:w-1/2"
                    >
                        <Lottie
                            animationData={laptopAnimation}
                            className="w-full  mx-auto"
                        ></Lottie>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="w-full lg:w-1/2 px-2"
                    >
                        <p className="mx-auto lg:text-xl">
                            Hi, I'm Tanvir Ahmed Jisan, a passionate frontend
                            developer with a strong foundation in HTML, CSS,
                            JavaScript, React, Node.js, Express.js, MongoDB, Git
                            , and GitHub. I specialize in creating visually
                            appealing, responsive, and user-friendly web
                            experiences that combine aesthetics with
                            functionality. With hands-on experience in building
                            projects ranging from simple landing pages to
                            complex web applications, I have honed my skills in
                            delivering seamless user experiences. My goal is to
                            transform creative ideas into impactful digital
                            products that stand out. Beyond coding, I’m
                            committed to staying updated with the latest web
                            development trends and continuously expanding my
                            expertise in modern technologies. I thrive on
                            learning and enjoy exploring innovative solutions to
                            challenging problems. Let’s collaborate and bring
                            amazing ideas to life!
                        </p>
                    </div>
                </div>
            </div>
            <div className="divider my-0"></div>
        </div>
    );
};

export default AboutMe;
