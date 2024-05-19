import Image from "next/image";
import comingSoonImage from "@/public/coming-soon.jpg";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <Image
        src={comingSoonImage}
        alt="Coming Soon"
        className="w-full h-auto"
      />
    </div>
  );
}
