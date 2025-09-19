"use client";

import { useState, useEffect, useRef } from "react";
import Modal from "./components/Modal";
import Link from "next/link";

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
        src="/intro.mp4"
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
        src="/loop.mp4"
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover -z-20 transition-opacity duration-700`}
      />

      <main className="flex items-center z-50 min-h-screen w-full justify-center relative">
        <div className="container flex items-center justify-center relative">
          <nav className="relative w-full px-40 mt-40">
            <h1 className="font-garamond text-6xl text-center font-bold text-font-color">
              EGO TRIP
            </h1>
            <p className="text-font-color text-sm text-center py-6 font-bold">october 19th // 1345 rue de bellechasse</p>
            <ul className="text-md text-font-color font-garamond flex flex-row justify-between">
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(0);
                  }}
                  className="hover:italic hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  sincerely, liv
                </a>
              </li>
              <li className="mt-30">
                <a
                  onClick={openForm}
                  className="hover:italic hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  tickets
                </a>
              </li>
              <li className="mt-30">
                <Link
                  href="/artist"
                  className="hover:italic hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  radio gi gi
                </Link>
              </li>
              <li className="mt-30">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(1);
                  }}
                  className="hover:italic hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  message in a bottle
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleModal(2);
                  }}
                  className="hover:italic hover:cursor-pointer hover:font-bold transition-all duration-100"
                >
                  mailing list
                </a>
              </li>
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
