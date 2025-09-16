"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./components/Modal";
import Link from "next/link";

export default function Home() {
  const [isOpen, setModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<number | null>(null);
  const [animateOut, setAnimateOut] = useState(false);


  const handleModal = (index: number)  => {
    setActiveContent(index);
    setModalOpen(true);
  };

  const handleModalClose = () =>{
    setModalOpen(false);
  }

 

  return (
    <div className="garamond relative flex flex-wrap items-center justify-items-center min-h-screen pb-20">
      {/* Background Video */}
      <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <main className="flex items-center z-50 min-h-screen w-full justify-center">
        <div className="container flex items-center justify-center relative">
          <nav className="relative w-full px-40 mt-40">
            <ul className="text-md text-gray-900 font-garamond flex flex-row justify-between">
              <li><a onClick={(e) => {e.preventDefault(); handleModal(0)}} className="hover:italic hover:font-bold transition-all duration-100">sincerely, liv</a></li>
              <li className="mt-30"><a href="" className="hover:italic hover:font-bold transition-all duration-100">tickets</a></li>
              <li className="mt-30"><Link href="/artist" className="hover:italic hover:font-bold transition-all duration-100">who is gi gi?</Link></li>
              <li className="mt-30"><a onClick={(e) => {e.preventDefault(); handleModal(1)}} className="hover:italic hover:font-bold transition-all duration-100">message in a bottle</a></li>
              <li><a onClick={(e) => {e.preventDefault(); handleModal(2)}} className="hover:italic hover:font-bold transition-all duration-100">mailing list</a></li>
            </ul>
          </nav>
        </div>
      </main>
      <Modal isOpen={isOpen} handleModalClose={handleModalClose} activeContent={activeContent}/>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="font-garamond text-xs text-gray-900">ego trip 2025 &copy;</p>
      </footer>
    </div>
  );
}
