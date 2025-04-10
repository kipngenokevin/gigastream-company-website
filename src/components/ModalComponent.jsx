// ModalComponent.js
import React, { useState } from 'react';

const ModalComponent = ({ title, description, bgColor, logo }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  // Color mapping for Tailwind classes
  const colorStyles = {
    'red-bg': 'bg-red-600 hover:bg-red-700',
    'purple-bg': 'bg-purple-600 hover:bg-purple-700'
  };

  return (
    <>
      {/* Card Container */}
      <div 
        className={`work-container ${colorStyles[bgColor]} text-white p-6 rounded-xl shadow-lg 
          transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between`}
          onClick={handleOutsideClick}
      >
        <img 
          width={100} 
          src={logo} 
          alt={`${title} Icon`} 
          className="mb-4 rounded-md"
        />
        <h5 className="text-xl font-bold mb-2 tracking-tight">{title}</h5>
        <p className="text-sm opacity-90 mb-4 leading-relaxed">{description}</p>
        <div className="work-container-btn">
          <button 
            className={`${colorStyles[bgColor]} text-white px-4 py-2 rounded-full 
              font-medium `}
            onClick={handleShow}
          >
            More
          </button>
        </div>
      </div>

      {/* Modal with smooth animation */}
      {show && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          <div 
            className={`max-w-lg w-full m-4 transform transition-all duration-300 ease-in-out
              ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className={`${colorStyles[bgColor]} text-white p-5 flex justify-between items-center`}>
                <h5 className="text-xl font-semibold tracking-wide">{title}</h5>
                <button 
                  type="button" 
                  className="text-white hover:text-gray-200 transition-colors duration-200" 
                  onClick={handleClose}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <img 
                  width={100} 
                  src={logo} 
                  alt={`${title} Icon`} 
                  className="mb-4 rounded-lg shadow-md"
                />
                <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
                <p className="text-gray-600 italic">
                  This is where you can add more detailed information about {title.toLowerCase()}.
                </p>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button 
                  type="button" 
                  className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-full 
                    font-medium transition-all duration-300"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;