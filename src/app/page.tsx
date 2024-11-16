import Image from "next/image";
import SearchBar from "./(components)/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[400px]">
        <Image
          src="/evening_tao.jpg"
          alt="Real Estate Backgroung"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5 text-white">
            Find Your Dream Home
          </h1>
          <p className="text-lg text-white mt-3">
            Explore the best properties in your favorite locations
          </p>
          <SearchBar />
        </div>
      </section>
    </div>
  );
}
