import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <Hero />
      </div>
    </div>
  );
}
