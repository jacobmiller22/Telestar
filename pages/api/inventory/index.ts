import { EHttpMethod } from "interfaces/http";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { HOSTS } from "consts";

// type Data = {
//   name: string;
// };

const API_Inventory = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case EHttpMethod.GET:
      // console.log(`TEST: ${HOSTS["inventory-api"]}/v1/inventory/all`);
      const apiResponse = await axios.get(
        `${HOSTS["inventory-api"]}/v1/inventory/all`
      );
      // console.log("api res", apiResponse.data);
      return res.status(200).send(apiResponse.data);
    default:
      return res.status(405).end("Method not allowed");
  }
  res.status(200).json({ name: "John Doe" });
};

export default API_Inventory;
