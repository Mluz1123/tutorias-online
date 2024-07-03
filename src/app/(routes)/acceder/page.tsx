import React from "react";

const Page = ({ showModal, setShowModal }) => {
  if (!showModal) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto flex space-x-4">
        <div className="flex-1 text-center p-4 border-r border-gray-300">
          <h2 className="text-2xl font-semibold">Estudiantes</h2>
        </div>
        <div className="flex-1 text-center p-4">
          <h2 className="text-2xl font-semibold">Tutores</h2>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default Page;
