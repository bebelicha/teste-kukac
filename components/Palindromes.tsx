import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab } from "@headlessui/react";

export default function Palindromes() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [palindromes, setPalindromes] = useState([]);

  const createPalindromes = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "post",
      url: "/api/palindromes",
      data: { start, end },
    });

    setPalindromes(response.data);
  };
  

  return (
    <Tab.Panel className=" mx-8">
      <h2 className=" my-8 text-2xl font-bold">Palíndromos</h2>
      <form onSubmit={createPalindromes}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Início do intervalo:
            <input
              onChange={(e) => setStart(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Fim do intervalo:
            <input
              onChange={(e) => setEnd(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
            />
          </label>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div className="mb-6 my-8 ">
        <data className="block w-full  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {palindromes.join(", ")}
        </data>
      </div>
    </Tab.Panel>
  );
}
