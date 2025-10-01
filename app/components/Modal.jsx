import { useState, useEffect } from "react";
//import TextForm from "./TextForm";
import MailingList from "./MailingList";
import { GiMushroomHouse } from "react-icons/gi";


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
          className="absolute top-20 right-0"
          onClick={handleModalClose}
        >
          <span className="font-bold text-lg text-font-color">x</span>
        </button>
        <div className="modal-content w-[400px] h-[400px] flex items-center justify-center">
          {activeContent === 0 && (
              <div>
                <h3 className="text-font-color text-lg font-bold mb-3">Credits</h3>
                <ul className="text-font-color text-sm">
                  <li className=""><strong className="italic mr-2">Lighting:</strong> Jane Doe</li>
                  <li className=""><strong className="italic mr-2">Web:</strong> Mia Salaveria</li>
                  <li className=""><strong className="italic mr-2">Logo:</strong> Jane Doe</li>
                  <li className=""><strong className="italic mr-2">Carpentry:</strong> Jane Doe</li>
                  <li className=""><strong className="italic mr-2">Food:</strong> Jane Doe</li>
                  <li className=""><strong className="italic mr-2">Parquette:</strong> Jane Doe</li>
                  <li className=""><strong className="italic mr-2">DJ:</strong> Gi Gi</li>
                </ul>
              </div>
            )
          }
          {activeContent === 1 && ( 
            <div className="text-font-color">
              <h2 className="text-2xl font-bold flex items-center ">trip treats<GiMushroomHouse className="ml-2" /></h2>
              <h3 className="text-md font-bold">Menu</h3>
            </div>
          )}
          {/* {activeContent === 1 && <TextForm />} */}
          {/* {activeContent === 2 && <MailingList />} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
