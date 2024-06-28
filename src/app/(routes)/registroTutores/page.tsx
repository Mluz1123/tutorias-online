"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [document, setDocument] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Lógica para el inicio de sesión
  };

  return (
    <div>
      <section className="min-h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <div className="container max-w-lg mx-auto p-4">
          <div className="flex h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 p-8">
                <div className="text-center mb-8">
                  <h4 className="text-4xl">
                    Tutorias <span className="font-semibold">Online</span>
                  </h4>
                </div>

                <form>
                  <p className="mb-4">
                    Por favor, diligencia los siguientes datos 👇
                  </p>
                  <Input
                    type="text"
                    placeholder="Nombres"
                    className="mb-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <Input
                    type="text"
                    placeholder="Apellidos"
                    className="mb-4"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className="flex gap-2 justify-between group">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tipo documento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="cc">C.C.</SelectItem>
                          <SelectItem value="ce">C.E.</SelectItem>
                          <SelectItem value="p">Pasaporte</SelectItem>
                          <SelectItem value="o">Otro</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Input
                      type="number"
                      placeholder="Numero Documento"
                      className="mb-4"
                      value={document}
                      onChange={(e) => setDocument(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 justify-between group">
                    <Input
                      type="number"
                      placeholder="Teléfono"
                      className="mb-4"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                      type="text"
                      placeholder="Ciudad"
                      className="mb-4"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Especialidad o curso a dictar"
                    className="mb-4"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <Input
                    type="password"
                    placeholder="Contraseña"
                    className="mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <div className="text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xl leading-normal text-white font-semibold shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      style={{
                        background:
                          "linear-gradient(to right, #a31616, #d45656, #d45656, #a31616)",
                      }}
                      onClick={() => router.push("/loginTutor")}
                    >
                      Registrarse
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
