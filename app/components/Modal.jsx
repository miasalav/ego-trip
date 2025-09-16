import { useState, useEffect } from "react";
import TextForm from "./TextForm";
import MailingList from "./MailingList";

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
      const timeout = setTimeout(() => setShowModal(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleModalClose}
    >
      <div
        className={`w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(223,221,207,1)_50%,_rgba(255,255,255,0)_70%)] rounded-full relative flex items-center justify-center
          transition-all duration-400 ${
            visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-20 right-0"
          onClick={handleModalClose}
        >
          <span className="font-bold text-lg text-gray-900">x</span>
        </button>
        <div className="modal-content w-[400px] h-[400px] flex items-center justify-center">
          {activeContent === 0 && <p className="text-gray-900">active content 1</p>}
          {activeContent === 1 && <TextForm />}
          {activeContent === 2 && <MailingList />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
