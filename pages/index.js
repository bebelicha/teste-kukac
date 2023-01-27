import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useEffect } from "react";
import axios from "axios";

import Vehicles from "components/Vehicles";
import Palindromes from "components/Palindromes";
import CEPs from "components/CEPs";
import Cashier from "components/Cashier";

export default function Home(data) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Kukak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <h1 className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Desafio Kukac
          </h1>
          <div className="">
            <Tab.Group>
              <Tab.List className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-100 hover:bg-lime-500 dark:hover:bg-lime-500 dark:hover:text-gray-100">
                  Palíndromos
                </Tab>
                <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-100 hover:bg-lime-500 dark:hover:bg-lime-500 dark:hover:text-gray-100">
                  Caixa
                </Tab>
                <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-100 hover:bg-lime-500 dark:hover:bg-lime-500 dark:hover:text-gray-100">
                  Veículo
                </Tab>
                <Tab className="inline-block p-4 rounded-t-lg hover:text-gray-100 hover:bg-lime-500 dark:hover:bg-lime-500 dark:hover:text-gray-100">
                  CEP
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Palindromes></Palindromes>
                <Cashier></Cashier>
                <Vehicles />
                <CEPs />
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </main>
    </div>
  );
}
