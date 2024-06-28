/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Acceder = ({ showModal, setShowModal }) => {
  const router = useRouter();
  if (!showModal) return null;

  const handleLoginEstudent = () => {
    router.push("/loginEstudent");
    setShowModal(false);
  };
  const handleLoginTutor = () => {
    router.push("/loginTutor");
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-10 flex space-x-4">
        <div
          className="relative flex-1 cursor-pointer group rounded-lg"
          onClick={handleLoginEstudent}
        >
          <img
            src="/images/estudiantes.jpg"
            alt="Estudiantes"
            className="w-full rounded-lg h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white bg-black bg-opacity-50 p-2 rounded">
              Como Estudiante
            </h2>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-10 flex space-x-4">
        <div
          className="relative flex-1 cursor-pointer group rounded-lg"
          onClick={handleLoginTutor}
        >
          <img
            src="/images/tutores.jpg"
            alt="Tutores"
            className="w-full rounded-lg h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white bg-black bg-opacity-50 p-2 rounded">
              Como Tutor
            </h2>
          </div>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 text-white text-4xl"
        onClick={() => setShowModal(false)}
      >
        &times;
      </button>
    </div>
  );
};

export default Acceder;
