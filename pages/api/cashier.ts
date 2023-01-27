import { NextApiRequest, NextApiResponse } from "next";

function cashier(product, payment) {
  const change = payment - product;
  let remaining = change;
  let a = 0;
  let b = 0;
  let c = 0;
  for (a = 0; remaining >= 100; a++) {
    remaining -= 100;
  }
  for (b = 0; change < 100 && remaining >= 10; b++) {
    remaining -= 10;
  }
  for (c = 0; change < 10 && remaining >= 0; c++) {
    remaining -= 1;
  }
  const min = a + b + c;
  return {
    a,
    b,
    c,
    min,
    product,
    change,
  };
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { product, payment } = req.body;
  console.debug(req.body);

  const result = cashier(parseInt(product), parseInt(payment));
  return res.json(result);
}
