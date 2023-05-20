type CardValueProps = {
  isTotal?: boolean;
  label: string;
  value: string;
  icon: React.ReactNode;
};

export default function CardValue({
  label,
  icon,
  isTotal,
  value,
}: CardValueProps) {
  return (
    <div
      className={`rounded-lg  w-80 shadow-lg h-36 p-8 flex flex-col gap-4 ${
        isTotal ? "bg-orange-500" : "bg-white-100"
      }`}
    >
      <div className="flex justify-between  ">
        <span
          className={`text-lg ${isTotal ? "text-white-100" : "text-gray-500"}`}
        >
          {label}
        </span>
        <p className="text-2xl">{icon}</p>
      </div>
      <h2
        className={`text-4xl ${isTotal ? "text-white-100" : "text-gray-500"}`}
      >
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(value))}
      </h2>
    </div>
  );
}
