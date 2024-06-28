import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/alumno" className="block">
          Alumno
        </Link>
        <Link href="/tutor" className="block text-center">
          Tutor
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
