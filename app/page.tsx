"use client";

import { useState, useEffect, useRef } from "react";
import Modal from "./components/Modal";
import Link from "next/link";
import Image from "next/image";
import { IoTicketOutline } from "react-icons/io5";




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
    <div className="font-bricolage relative flex flex-wrap items-center justify-items-center min-h-screen">
      {/* Intro video */}
      <video
        ref={introRef}
        src="/intro-2.mp4"
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
        src="/loop-2.mp4"
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-700`}
      />

      <main className="flex items-center z-50 w-full justify-center relative">
        <div className="container flex items-center justify-center relative">
          <div className="flex justify-center absolute right-10 top-10 z-50">
              <a
                  onClick={openForm}
                  className="mb-3 md:mb-0 font-bold text-sm text-white bg-[#d57b0e] rounded-2xl hover:[box-shadow:_2px_2px_6px_rgba(0,0,0,0.25)] py-1 px-2 hover:cursor-pointer hover:font-bold transition-all duration-100 flex items-center"
                >
                  <IoTicketOutline className="mr-1"/>
                  tickets 
              </a>
            </div>
          <nav className="relative w-full max-w-[700px] mt-10 md:mt-30 flex flex-col">
            <Image
              src="/images/ego-trip-logo.png"  
              alt="Ego Trip Logo"
              width={300}
              height={400}
              className="m-auto"
            />
            <span className="text-font-color text-md -tracking-[1px] text-center block m-auto italic">with Gi Gi</span>
            
            <p className="text-font-color text-xs text-center py-4">10.19.2025 <br/> 1345 rue de bellechasse</p>
          <ul className="text-md text-font-color text-xs flex flex-col md:flex-row items-center md:justify-between mt-4 md:mt-0 font-bold">
            <li className="mb-4 md:mb-0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(0);
                  }}
                  className="w-full rounded-2xl hover:[text-shadow:_2px_2px_6px_rgba(0,0,0,0.25)]  py-2 px-3 hover:cursor-pointer transition-all duration-100"
                >
                  ✦ before you fly ✦
                </a>
              </li>
              <li className="mb-4 md:mb-0  mt-0 md:mt-10 lg:mt-20">
                <Link
                  href="/artist"
                  className="w-full hover:[text-shadow:_2px_2px_6px_rgba(0,0,0,0.25)]  py-2 px-3 hover:cursor-pointer transition-all duration-300"
                >
                  ✦ about your captain ✦
                </Link>
              </li>
              <li className="mb-4 md:mb-0  mt-0 md:mt-10 lg:mt-20">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(2);
                  }}
                  className="w-full hover:[text-shadow:_2px_2px_6px_rgba(0,0,0,0.25)]  py-2 px-3 hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  ✦ trip treats ✦
                </a>
              </li> 
              <li className="mb-4 md:mb-0">
               <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(1);
                  }}
                  className="w-full hover:[text-shadow:_2px_2px_6px_rgba(0,0,0,0.25)]  py-2 px-3 hover:cursor-pointer transition-all duration-100"
                >
                  ✦ inflight entertainment ✦
                </a>
              </li>
              {/* <li className="mb-8 md:mb-0 mt-0">
                <a
                  onClick={openForm}
                  className="hover:[text-shadow:_2px_2px_6px_rgba(0,0,0,0.25)] py-2 px-3 hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  ✦ tickets ✦
                </a>
              </li> */}
              {/* <li className="mb-8 md:mb-0">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(2);
                  }}
                  className="border border-font-color bg-[#f7e1b4] rounded-2xl hover:[box-shadow:_2px_2px_6px_rgba(0,0,0,0.25)]  py-2 px-3 hover:cursor-pointer hover:font-bold transition-all duration-100"
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
        <p className="text-xs text-white text-center">
          ego trip 2025 &copy;
        </p>
      </footer>
    </div>
  );
}
