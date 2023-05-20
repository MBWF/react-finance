import Image from "next/image";

export default function Header() {
  return (
    <section className="w-full h-56 bg-blue-600 ">
      <div className="w-full flex justify-center items-center h-24 ">
        <Image
          src={"/logo-finance.png"}
          alt="Finance Logo"
          width={280}
          height={80}
        />
      </div>
    </section>
  );
}
