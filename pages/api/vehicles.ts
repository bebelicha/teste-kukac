import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

let vehicles = JSON.parse(
  fs.readFileSync("data/vehicles.json", { flag: "a+" }).toString() || "[]"
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { model, year, doors, brand } = req.body;
    vehicles.push({ model, year, doors, brand });
    fs.writeFileSync("data/vehicles.json", JSON.stringify(vehicles));
  }

  return res.send(vehicles);
}
