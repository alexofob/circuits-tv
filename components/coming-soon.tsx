"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/public/coming-soon.jpg";
import image2 from "@/public/coming-soon-2.jpg"; // Add your second image here

export default function ComingSoon() {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Image
      src={currentImage}
      alt="Coming Soon"
      className="w-full h-auto"
      priority
    />
  );
}
