import CardValue from "@/components/CardValue/indes";
import Header from "@/components/Header";
import RecordsCard from "@/components/RecordsCard";
import NewTransaction from "@/components/newTransaction";
import { fetchWrapper } from "@/utils/fetchWrapper";

import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

export type TransactionType = {
  id: number;
  title: string;
  value: string;
  type: string;
  date: string;
  category: string;
};

export default async function Home() {
  const transactions = await fetchWrapper<TransactionType[]>("transactions", {
    cache: "no-store",
    next: { tags: ["transactions"] },
  });

  const outcome = transactions.reduce((acc, transaction) => {
    if (transaction.type === "budget") {
      return acc + Number(transaction.value);
    }
    return acc;
  }, 0);

  const income = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + Number(transaction.value);
    }
    return acc;
  }, 0);

  return (
    <main className="w-full">
      <Header />

      <section className="flex justify-between max-w-screen-lg m-auto -mt-24 gap-4">
        <CardValue
          label="Entrada"
          value={income.toString()}
          icon={<BsArrowUpCircle color="#12A454" />}
        />
        <CardValue
          label="Saída"
          value={outcome.toString()}
          icon={<BsArrowDownCircle color="#E83F5B" />}
        />
        <CardValue
          label="Total"
          value={(income + outcome).toString()}
          isTotal
          icon={<MdOutlineAttachMoney color="#FFFFFF" />}
        />
      </section>
      <div className="max-w-screen-lg m-auto">
        <NewTransaction />
      </div>

      <section className="flex flex-col items-center justify-center gap-4 w-full mt-16 overflow-y-auto">
        {transactions.map((transaction) => (
          <RecordsCard
            key={transaction.id}
            text={transaction.title}
            value={transaction.value}
            type={transaction.type}
            category={transaction.category}
            date={transaction.date}
          />
        ))}
      </section>
    </main>
  );
}
