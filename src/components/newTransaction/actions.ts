"use server";

import { fetchWrapper } from "@/utils/fetchWrapper";
import { revalidateTag } from "next/cache";

type Inputs = {
  title: string;
  value: string;
  category: string;
};

export const createTransaction = async (data: Inputs) => {
  const response = await fetchWrapper("transactions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      type: Number(data.value) > 0 ? "income" : "budget",
      date: String(new Date().toLocaleDateString("pt-BR")),
    }),
  }).then(() => revalidateTag("transactions"));

  return response;
};
