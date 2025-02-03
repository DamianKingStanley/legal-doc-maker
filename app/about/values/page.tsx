import React from "react";
import CoreValues from "@/app/components/CoreValues";
import Image from "next/image";

const Values = () => {
  return (
    <section className="values bg-gray-50 ">
      <div className="banner relative w-full h-64">
        <Image
          src="/images/value.png"
          alt="DS TECH"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <CoreValues />
    </section>
  );
};

export default Values;
