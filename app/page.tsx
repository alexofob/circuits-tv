import Image from "next/image";

import ComingSoon from "@/components/coming-soon";
import Logo from "@/public/logo-light.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen bg-gray-900">
      <Image
        src={Logo}
        alt="circuit tv logo"
        className="lg:hidden w-64 h-auto"
      />
      <ComingSoon />
      <p className="text-xl text-gray-300 text-center lg:hidden p-6 ">
        Experience the Cinematic Universe on Mobile.
      </p>
    </div>
  );
}
