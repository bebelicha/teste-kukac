import { NextApiRequest, NextApiResponse } from "next";

function findPalindromes(start, end) {
  const palindromes = [];

  for (let i = start; i <= end; i++) {
    let numAsString = i.toString();
    let reverseNum = numAsString.split('').reverse().join('');
    if (numAsString === reverseNum) {
      palindromes.push(i);
    }
  }

  return palindromes;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { start, end } = req.body;

  res.send(findPalindromes(start, end));
}
