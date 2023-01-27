import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ceps = req.body.slice(0, 5);
  const cepData = ceps.map(
    async (cep) => (await axios(`https://viacep.com.br/ws/${cep}/json`)).data
  );
  res.send(await Promise.all(cepData));
}
