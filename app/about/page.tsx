"use client";
import React, { useState } from "react";
import Image from "next/image";
import myImage from "../../assets/myface.jpg";
import "../../app/globals.css";
import Modal from "@/components/Modal";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
            <div className="w-full lg:w-6/12">
              <h1 className="animated-text mb-10 mt-4  text-xs lg:text-2xl  !leading-[1.5] md:text-2xl xl:text-2xl">
                <span className="font-bold">Hello, Im Peter.</span> Im an
                aspiring{" "}
                <span className="font-bold text-[#1d4ed8]">
                  front-end developer
                </span>
                .{" "}
                <span>
                  With 4 months of experience working as a{" "}
                  <span className="font-bold text-[#1d4ed8]">React </span>
                  developer, I have embarked on an exciting journey to craft
                  immersive user experiences.{" "}
                  <span className="font-bold text-[#1d4ed8]">
                    My passion
                  </span>{" "}
                  lies in translating creative ideas into functional and
                  visually appealing websites with{" "}
                  <span className="text-[#1d4ed8]">scalable code.</span>
                </span>{" "}
                <span>
                  As I continue to evolve in my role, I am committed to honing
                  my skills and staying abreast of the latest{" "}
                  <span className="text-[#1d4ed8]">frontend technologies</span>.
                  Looking ahead, I am eager to contribute to innovative
                  projects, collaborate with talented teams, and contribute to
                  the ever-evolving landscape of{" "}
                  <span className="text-[#1d4ed8]">web development.</span> Join
                  me as I navigate this dynamic field and create a future where
                  technology and creativity converge seamlessly.
                </span>
              </h1>
              <div className="lg:flex lg:justify-center hidden">
                <button
                  className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3 animated-button lg:text-base text-sm"
                  onClick={() => setShowModal(true)}
                >
                  See employment history
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={myImage}
                alt="Peter face image"
                width={300}
                className="rounded"
              />
            </div>
            <div className="lg:hidden flex justify-center">
              <button
                className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3 animated-button lg:text-base text-sm sm:mt-10 "
                onClick={() => setShowModal(true)}
              >
                See employment history
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h2 className="font-bold text-xl text-center  ">Career history</h2>
        <div className="bg-[#121212] p-3 rounded-xl mt-3 flex flex-col">
          <a
            href="https://prostaedukacja.com.pl/"
            className="text-[#1d4ed8] text-xl text-center font-bold"
          >
            Prosta Edukacja
          </a>
          <p className="text-sm text-center">Front-end developer, intern</p>
          <p className="text-sm text-center">React, Next.js, SCSS, Redux</p>
          <p className="text-sm text-center">4 months</p>
        </div>
      </Modal>
    </>
  );
};

export default Page;
