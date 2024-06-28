/* eslint-disable @next/next/no-img-element */
"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Lógica para el inicio de sesión
  };

  return (
    <section className="min-h-screen bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
      <div className="container max-w-6xl mx-auto p-4">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #16a34a, #56d478, #56d478, #16a34a)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <img
                      src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                      className="w-full"
                      alt="Sample image"
                    />
                  </div>
                </div>

                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h4 className="mb-12 mt-1 pb-1 text-4xl">
                        Tutorias <span className="font-semibold">Online</span>
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">
                        Por favor, ingrese a su cuenta, si no tienes una
                        registrate 👇
                      </p>
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

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <div className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xl leading-normal text-white font-semibold shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #16a34a, #56d478, #56d478, #16a34a)",
                            }}
                            onClick={() => router.push("/cursos")}
                          >
                            Iniciar sesión
                          </button>
                        </div>

                        <a href="#!">¿Has olvidado tu contraseña?</a>
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 font-semibold">
                          ¿No tienes una cuenta?
                        </p>
                        <div>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-green-600 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-green-600 transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => router.push("/registroEstudent")}
                          >
                            Registro
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
