type RecordsCardProps = {
  text: string;
  value: string;
  category: string;
  date: string;
  type: string;
};

export default function RecordsCard({
  text,
  value,
  category,
  date,
  type,
}: RecordsCardProps) {
  return (
    <div className="bg-white-100 w-2/3 h-16 rounded-md flex justify-between items-center gap-16 px-20">
      <span className="flex-1 w-80 ">{text}</span>

      <span
        className={`font-bold w-24 ${
          type === "budget" ? "text-red-500" : "text-green-600"
        }`}
      >
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(value))}
      </span>

      <span className="w-24">{category}</span>

      <span className="w-24">{date}</span>
    </div>
  );
}
