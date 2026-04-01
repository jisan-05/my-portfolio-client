import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import daisyui from "../../assets/technology/daisyui.png";
import express from "../../assets/technology/express.png";
import js from "../../assets/technology/js.png";
import mongodb from "../../assets/technology/mongodb.png";
import next from "../../assets/technology/nextjs.webp";
import node from "../../assets/technology/node.png";
import postgresql from "../../assets/technology/postgresql.webp";
import react from "../../assets/technology/react.png";
import reactrouter from "../../assets/technology/reactrouter.png";
import tailwind from "../../assets/technology/tailwind.png";
import typescript from "../../assets/technology/typescript.png";

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      delay: 100,
      disable: "mobile",
      easing: "ease-in-out",
    });
  }, []);

  // Technology items with different animation directions for flow effect
  const frontendTech = [
    { src: react, alt: "React", delay: 0, direction: "fade-right" },
    { src: next, alt: "Next.js", delay: 100, direction: "fade-up" },
    { src: typescript, alt: "TypeScript", delay: 200, direction: "fade-left" },
    { src: js, alt: "JavaScript", delay: 0, direction: "fade-right" },
    { src: tailwind, alt: "Tailwind", delay: 100, direction: "fade-up" },
    { src: daisyui, alt: "DaisyUI", delay: 200, direction: "fade-left" },
    { src: reactrouter, alt: "React Router", delay: 300, direction: "fade-right" },
  ];

  const backendTech = [
    { src: node, alt: "Node.js", delay: 0, direction: "fade-right" },
    { src: express, alt: "Express", delay: 100, direction: "flip-left" },
    { src: mongodb, alt: "MongoDB", delay: 200, direction: "fade-left" },
    { src: postgresql, alt: "PostgreSQL", delay: 300, direction: "zoom-in" },
  ];

  return (
    <div>
      <div className="pt-14 md:pt-44 md:pb-44" id="skill">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-3xl md:text-[44px] text-center">Skill</h3>
          <p className="max-w-11/12 lg:max-w-1/2 mx-auto mt-10 md:text-center">
            Proficient in HTML, CSS, JavaScript, and React.js, I specialize in
            creating responsive and visually stunning web applications. With a
            strong foundation in UI/UX design and modern development tools, I
            bring ideas to life with precision and creativity.
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200" className="">
          <h3 className="text-3xl text-center mt-10">Front End Technology</h3>
          <div className="my-15 relative grid grid-cols-4 md:grid-cols-7 items-center justify-center gap-4">
            {frontendTech.map((tech, index) => (
              <div
                key={index}
                data-aos={tech.direction}
                data-aos-delay={tech.delay}
                data-aos-duration="600"
                data-aos-easing="ease-out-cubic"
                className="transform transition-all duration-300 hover:scale-110 hover:rotate-3"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className={`w-20 md:w-36 mx-auto ${
                    tech.alt === "Next.js" ? "bg-white rounded-[205px]" : ""
                  } ${tech.alt === "PostgreSQL" ? "bg-white" : ""}`}
                />
              </div>
            ))}
          </div>
          
          <h3 className="text-3xl text-center mt-8">Backend End Technology</h3>
          <div className="my-15 relative max-w-[900px] mx-auto grid grid-cols-4 gap-4">
            {backendTech.map((tech, index) => (
              <div
                key={index}
                data-aos={tech.direction}
                data-aos-delay={tech.delay}
                data-aos-duration="700"
                data-aos-easing="ease-out-back"
                className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className={`w-20 md:w-36 mx-auto ${
                    tech.alt === "PostgreSQL" ? "bg-white" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
    </div>
  );
};

export default Skill;