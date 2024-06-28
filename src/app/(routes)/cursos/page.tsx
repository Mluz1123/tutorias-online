"use client"
import React, {useState} from "react";
import { Meteors } from "./components/meteors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReserveModal from "./components/reserve-modal";

const Page = () => {
  const data = [
    {
      title: "Desarrollo Web Full Stack",
      description:
        "Profundiza en el diseño y desarrollo de aplicaciones web, a partir de la programación orientada a objetos, estrcuturando datos y algoritmos, incluyendo react y estilización, explorando conceptos avanzados y técnicas de implementación.",
      modality: "Online",
      schedule: "L a V de 6:00pm a 10:00pm",
      duration: "120 horas",
      tutorName: "Camilo Ruiz",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "CR",
    },
    {
      title: "Introducción a la Inteligencia Artificial",
      description:
        "Aprende los conceptos básicos de la Inteligencia Artificial, sus aplicaciones y cómo puede transformar diferentes industrias. Explora técnicas de machine learning y deep learning.",
      modality: "Presencial",
      schedule: "S y D de 9:00am a 1:00pm",
      duration: "80 horas",
      tutorName: "Ana Gómez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "AG",
    },
    {
      title: "Diseño de Experiencia de Usuario (UX)",
      description:
        "Aprende a diseñar interfaces de usuario intuitivas y atractivas. Estudia técnicas de investigación, prototipado y pruebas de usabilidad para crear productos digitales centrados en el usuario.",
      modality: "Online",
      schedule: "M y J de 7:00pm a 10:00pm",
      duration: "100 horas",
      tutorName: "Juan Pérez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "JP",
    },
    {
      title: "Desarrollo de Aplicaciones Móviles",
      description:
        "Aprende a construir aplicaciones móviles nativas para iOS y Android utilizando frameworks como React Native y Flutter. Cubre desde la programación básica hasta la publicación en las tiendas de aplicaciones.",
      modality: "Presencial",
      schedule: "L, M, X de 6:00pm a 9:00pm",
      duration: "120 horas",
      tutorName: "María Rodríguez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "MR",
    },
    {
      title: "Análisis de Datos con Python",
      description:
        "Aprende a procesar, analizar y visualizar datos utilizando Python y sus principales bibliotecas como Pandas, Numpy y Matplotlib. Desarrolla habilidades en ciencia de datos.",
      modality: "Online",
      schedule: "S de 9:00am a 1:00pm",
      duration: "80 horas",
      tutorName: "Carlos Sánchez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "CS",
    },
    {
      title: "Desarrollo de Videojuegos con Unity",
      description:
        "Aprende a crear videojuegos 2D y 3D utilizando la plataforma Unity. Cubre desde la programación básica hasta la publicación en diferentes plataformas.",
      modality: "Presencial",
      schedule: "V y S de 6:00pm a 10:00pm",
      duration: "120 horas",
      tutorName: "Sofía Gómez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "SG",
    },
    {
      title: "Ciberseguridad y Hacking Ético",
      description:
        "Aprende a identificar y mitigar vulnerabilidades en sistemas informáticos. Estudia técnicas de hacking ético, análisis forense y seguridad de redes.",
      modality: "Online",
      schedule: "L, M, X de 7:00pm a 10:00pm",
      duration: "100 horas",
      tutorName: "Pedro Martínez",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "PM",
    },
    {
      title: "Desarrollo de Aplicaciones Blockchain",
      description:
        "Aprende a construir aplicaciones descentralizadas (dApps) utilizando tecnologías blockchain como Ethereum y Solidity. Explora el potencial de la blockchain en diferentes industrias.",
      modality: "Presencial",
      schedule: "J y V de 6:00pm a 10:00pm",
      duration: "120 horas",
      tutorName: "Lucía Fernández",
      tutorImage: "https://github.com/shadcn.png",
      tutorInitials: "LF",
    },
  ];

   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserve = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start"
            >
              <h1 className="font-bold text-xl text-white mb-0 mt-2 relative z-50">
                {item.title}
              </h1>

              <p className="font-normal text-sm text-slate-500 mb-4 relative z-50">
                {item.description}
              </p>
              <p className="font-normal text-sm text-slate-500 mb-1 relative z-50">
                Modalidad:
                <span className="font-bold text-white text-sm mb-4 ">
                  {" "}
                  {item.modality} 💻
                </span>
              </p>
              <p className="font-normal text-sm text-slate-500 mb-1 relative z-50">
                Horarios:
                <span className="font-bold text-white text-sm mb-4 ">
                  {" "}
                  {item.schedule} 📅
                </span>
              </p>
              <p className="font-normal text-sm text-slate-500 mb-1 relative z-50">
                Duración:
                <span className="font-bold text-white text-sm mb-4 ">
                  {" "}
                  {item.duration} 🕧
                </span>
              </p>
              <div className="flex items-center gap-2 mb-2 mt-1 ">
                <p className="font-normal text-sm text-slate-500 relative z-50">
                  Tutor:
                </p>
                <Avatar>
                  <AvatarImage src={item.tutorImage} />
                  <AvatarFallback>{item.tutorInitials}</AvatarFallback>
                </Avatar>
                <span className="items-center font-bold text-sm text-white">
                  {item.tutorName}
                </span>
              </div>
              <div className="flex justify-end items-center w-full">
                <div className="mb-2">
                  <button className="border px-4 py-1 rounded-lg !text-sm border-gray-500 text-gray-300" onClick={handleReserve}>
                    Reservar &rarr;
                  </button>
                </div>
              </div>
              <Meteors number={10} />
            </div>
          ))}
        </div>
      </div>
       <ReserveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Page;
