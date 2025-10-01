"use client";

import { useState, useEffect, useRef } from "react";
import Modal from "./components/Modal";
import Link from "next/link";
import { GiMushroomHouse } from "react-icons/gi";
import { IoTicketSharp } from "react-icons/io5";
import { FaFly } from "react-icons/fa";
import { IoMdRadio } from "react-icons/io";



export default function Home() {
  const [isOpen, setModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<number | null>(null);
  const [showLoop, setShowLoop] = useState(false);

  const introRef = useRef<HTMLVideoElement | null>(null);
  const loopRef = useRef<HTMLVideoElement | null>(null);

  const handleModal = (index: number) => {
    setActiveContent(index);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const formUrl = "https://www.zeffy.com/embed/ticketing/ego-trip?modal=true";

  const openForm = () => {
    window.open(formUrl, "_blank", "width=600,height=800");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loopRef.current) {
        loopRef.current.currentTime = 0; // restart loop video fresh
        loopRef.current.play();          // start loop
      }
      setShowLoop(true); // trigger fade-in
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="garamond relative flex flex-wrap items-center justify-items-center min-h-screen">
      {/* Intro video */}
      <video
        ref={introRef}
        src="/intro-1.mp4"
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 ${
          showLoop ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Loop video (starts only after 4s) */}
      <video
        ref={loopRef}
        src="/loop-1.mp4"
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-700`}
      />

      <main className="flex items-center z-50 min-h-screen w-full justify-center relative">
        <div className="container flex items-center justify-center relative">
          <nav className="relative w-full max-w-[700px] mt-10 md:mt-30">
            <h1 className="font-garamond text-6xl text-center font-bold text-font-color">
              EGO TRIP
            </h1>
            <span className="text-font-color text-lg font-bold text-center block m-auto italic">with Gi Gi</span>
            
            <p className="text-font-color text-sm text-center py-6">10.19.2025 <br/> 1345 rue de bellechasse</p>
            <ul className="text-md text-font-color font-garamond flex flex-col md:flex-row items-center md:justify-between ">
            <li className="mb-4 md:mb-0">
                <Link
                  href="/artist"
                  className="relative hover:cursor-pointer hover:font-bold transition-all duration-100 flex items-center group"
                >
                  radio gi gi
                  <IoMdRadio className="ml-2"/>
                  {/* underline animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[0.5px] w-0 bg-font-color transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
              <li className="mb-4 md:mb-0  mt-0 md:mt-20 lg:mt-30">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(0);
                  }}
                  className="hover:cursor-pointer hover:font-bold transition-all duration-100 flex items-center relative group"
                >
                  let me take you on a journey
                  <FaFly className="ml-2" />
                  {/* underline animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[0.5px] w-0 bg-font-color transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
              <li className="mb-4 md:mb-0 mt-0 md:mt-20 lg:mt-30">
                <a
                  onClick={openForm}
                  className="hover:cursor-pointer hover:font-bold transition-all duration-100 flex items-center relative group"
                >
                  tickets
                  <IoTicketSharp className="ml-2" />
                  {/* underline animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[0.5px] w-0 bg-font-color transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
              <li className="mb-4 md:mb-0 mt-0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(1);
                  }}
                  className="hover:cursor-pointer hover:font-bold transition-all duration-100 flex items-center relative group"
                >
                  trip treats
                  <GiMushroomHouse className="ml-2" />
                  {/* underline animation */}
                  <span className="absolute left-1/2 -bottom-1 h-[0.5px] w-0 bg-font-color transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
              {/* <li className="mb-4 md:mb-0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(2);
                  }}
                  className="hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  mailing list
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </main>

      <Modal
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        activeContent={activeContent}
      />

      <footer className="flex w-full flex-wrap items-center justify-center py-6">
        <p className="font-garamond text-xs text-white text-center">
          ego trip 2025 &copy;
        </p>
      </footer>
    </div>
  );
}
