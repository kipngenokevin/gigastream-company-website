// ModalComponent.js
import React, { useState, useEffect } from 'react';

const ModalComponent = ({ title, description,moreDescription, bgColor, logo }) => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false); 
  };
  const handleShow = () => {
    setShow(true); 
    setTimeout(() => setIsVisible(true), 10);
  };
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    if (!isVisible && show) {
      const timer = setTimeout(() => setShow(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [isVisible, show]);

  const colorStyles = {
    'red-bg': 'bg-red-700 hover:bg-red-800',
    'purple-bg': 'bg-purple-700 hover:bg-purple-800' 
  };

  return (
    <>
      {/* Card Container */}
      <div 
        className={`work-container ${colorStyles[bgColor]} text-white p-6 rounded-xl shadow-lg 
          transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between`}
      >
        <img 
          width={100} 
          src={logo} 
          alt={`${title} Icon`} 
          className="mb-4 rounded-md object-cover"
        />
        <h5 className="text-xl font-bold mb-2 tracking-tight">{title}</h5>
        <p className="text-sm opacity-90 mb-4 leading-relaxed">{description}</p>
        <div className="work-container-btn">
          <button 
            className={`${colorStyles[bgColor]} text-white px-4 py-2 rounded-full 
              font-medium transition-all duration-300 hover:shadow-md`}
            onClick={handleShow}
          >
            More
          </button>
        </div>
      </div>

      {show && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={handleOutsideClick}
        >
          <div 
            className={`max-w-lg w-full m-4 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
              ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-12'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className={`${colorStyles[bgColor]} text-white p-5 flex justify-between items-center relative`}>
                <h5 className="text-xl font-semibold tracking-wide z-10">{title}</h5>
                <button 
                  type="button" 
                  className="text-white hover:text-gray-200 transition-colors duration-200 z-10" 
                  onClick={handleClose}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30" />
              </div>
              <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                {/* <img 
                  width={100} 
                  src={logo} 
                  alt={`${title} Icon`} 
                  className="mb-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                /> */}
                <p className="text-gray-700 mb-3 leading-relaxed font-medium">{description}</p>
                <p className="text-gray-600 italic text-md">
                  {moreDescription}
                </p>
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-end">
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;