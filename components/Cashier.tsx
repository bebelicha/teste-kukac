import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab } from "@headlessui/react";

export default function Cashier() {
  const [cashier, setCashier] = useState({});
  const [product, setProduct] = useState("");
  const [payment, setPayment] = useState("");

  const createCashier = async (event) => {
    event.preventDefault();

    const response = await axios({
      method: "post",
      url: "/api/cashier",
      data: { product, payment },
    });

    setCashier(response.data);
  };

  return (
    <Tab.Panel className=" mx-8">
      <h2 className=" my-8 text-2xl font-bold">Caixa</h2>
      <form action="/send-data-here" method="post">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Valor do produto:
          </label>
          <input
            onChange={(e) => setProduct(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Valor Pagamento:
          </label>
          <input
            onChange={(e) => setPayment(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="pagamento"
            name="pagamento"
          />
        </div>
        <button
          onClick={createCashier}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <div className="mb-6 my-8 ">
        <a className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <div>
              <p>Notas de 100: {cashier.a}</p>
              <p>Notas de 10: {cashier.b}</p>
              <p>Notas de 1: {cashier.c}</p>
              <p>Quantidade miníma de notas: {cashier.min}</p>
              <p>Valor da compra: {cashier.product}</p>
              <p>Valor do troco: {cashier.change}</p>
            </div>
          </div>
        </a>
      </div>
    </Tab.Panel>
  );
}
