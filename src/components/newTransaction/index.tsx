"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTransition } from "react";
import { Input } from "../Input";
import { createTransaction } from "./actions";

type Inputs = {
  title: string;
  value: string;
  category: string;
};

export default function NewTransaction() {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [_, startTransition] = useTransition();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    startTransition(() => createTransaction(data).then(() => reset()));
  };

  return (
    <form
      className="flex justify-between mt-12 items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Título da transação"
        placeholder="Aluguel Apartamento"
        {...register("title")}
      />
      <Input label="Valor" placeholder="R$45,00" {...register("value")} />
      <Input
        label="Categoria"
        placeholder="Ex: Feira"
        {...register("category")}
      />

      <button
        className="text-white bg-orange-500 h-10 hover:bg-orange-400 font-medium rounded-lg text-sm px-5 mr-2 mb-px"
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
}
