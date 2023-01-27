import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab } from "@headlessui/react";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [model, setModel] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [doors, setDoors] = useState(4);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    const getVehicles = async () => {
      const response = await axios({
        method: "get",
        url: "/api/vehicles",
      });

      setVehicles(response.data);
    };
    getVehicles();
  });

  const createVehicle = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "post",
      url: "/api/vehicles",
      data: { model, year, doors, brand },
    });

    setVehicles(response.data);
  };

  return (
    <Tab.Panel className=" mx-8">
      <h2 className="my-8 text-2xl font-bold">Garagem</h2>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Modelo:
            <input
              onChange={(e) => setModel(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="modelo"
              name="modelo"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ano de Fabricação:
            <input
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="ano"
              name="ano"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Quantidade de portas:
            <input
              onChange={(e) => setDoors(parseInt(e.target.value))}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
              id="portas"
              name="portas"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Marca:
            <input
              onChange={(e) => setBrand(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id="marca"
              name="marca"
            />
          </label>
        </div>
        <button
          onClick={createVehicle}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div className="mb-6 my-8">
        <div className="flex flex-col gap-2 font-normal text-gray-700 dark:text-gray-400 block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {vehicles.map((e) => (
            <div>
              <p>Ano: {e.year}</p>
              <p>Marca: {e.brand}</p>
              <p>Modelo: {e.model}</p>
              <p>Portas: {e.doors}</p>
            </div>
          ))}
        </div>
      </div>
    </Tab.Panel>
  );
}
