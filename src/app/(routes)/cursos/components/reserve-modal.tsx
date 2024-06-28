import React from 'react';
import Confetti from 'react-confetti';

const ReserveModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" rounded-lg shadow-lg w-full max-w-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¡Reserva exitosa! 🎊</h2>
            <p className="mb-6">
              Gracias por reservar tu cupo en nuestro programa. 
            </p>
              <span className="font-bold mt-4">¡Nos vemos pronto!</span>
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
            <Confetti recycle={false}/>
        </div>
      )}
    </>
  );
};

export default ReserveModal;
