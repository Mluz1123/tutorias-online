"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ModeToggle from "./mode-toggle";
import Acceder from "./Acceder";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  // Verificar si la ruta actual es /login
  if (
    pathname === "/loginEstudent" ||
    pathname === "/registroEstudent" ||
    pathname === "/loginTutor" ||
    pathname === "/registroTutores"
  ) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-4 mx-auto sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl cursor-pointer" onClick={() => router.push("/")}>
        Tutorias<span className="font-bold">Online</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <Button
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <User strokeWidth="1" />
          Acceder
        </Button>
        <ModeToggle />
      </div>
      <Acceder showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Navbar;
