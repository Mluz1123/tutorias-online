import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function Home() {
  return (
    <section className="flex text-center items-center flex-col m-auto gap-6 max-w-[670px] py-20">
      <h1 className="text-4xl text-balance font-bold">
        Las mejores tutorias en linea{" "}
        <span className="text-[#16a34a]">con los mejores tutores</span>
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus alias
        iste veniam laudantium natus itaque? Veniam voluptatem laudantium porro
        officiis non eligendi, iure, commodi modi eveniet harum assumenda,
        labore amet.
      </p>
      <article className="">
        <label>¿Que quieres aprender?</label>
        <div className="flex mt-2 w-[280px]">
          <Input
            type="text"
            placeholder="Programación, Inglés, Ciberseguridad ..."
          />
          {/* <span className="absolute left-[63%] top-[75%]">
            <Search strokeWidth="1" />
          </span> */}
        </div>
      </article>
    </section>
  );
}
