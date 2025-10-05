import { useState, useEffect } from "react";
//import TextForm from "./TextForm";
import MailingList from "./MailingList";
import { AiOutlineCloseSquare } from "react-icons/ai";
import InfoOne from "./InfoOne";
import InfoTwo from "./InfoTwo";
import Menu from "./Menu";



const Modal = ({ isOpen, handleModalClose, activeContent }) => {
  const [showModal, setShowModal] = useState(false);  // keeps modal in DOM
  const [visible, setVisible] = useState(false);      // triggers transitions

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      // trigger fade-in on next tick
      setTimeout(() => setVisible(true), 10);
    } else if (showModal) {
      setVisible(false); // triggers fade-out
      // wait for transition to finish before unmounting
      const timeout = setTimeout(() => setShowModal(false), 700);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleModalClose}
    >
      <div
        className={`w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,241,179)_50%,_rgba(255,255,255,0)_70%)] rounded-full relative flex items-center justify-center
          transition-all duration-700 ${
            visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-20 right-10"
          onClick={handleModalClose}
        >
          <AiOutlineCloseSquare className="text-lg text-font-color" />
        </button>
        <div className="modal-content w-full md:w-[500px] h-[400px] flex items-center justify-center">
          {activeContent === 0 && <InfoOne/>}
          {activeContent === 1 && <InfoTwo/>}
          {activeContent === 2 && <Menu />}
          {/* {activeContent === 1 && <TextForm />} */}
          {/* {activeContent === 2 && <MailingList />} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
