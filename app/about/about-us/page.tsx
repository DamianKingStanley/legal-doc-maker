import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="about-us bg-white py-5">
      {/* Banner Image */}
      <div className="banner relative w-full h-64">
        <Image
          src="/images/about-us.avif"
          alt="About Us - DS TECH"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      {/* About Us Content */}
      <div className="content-container container mx-auto px-6 md:px-12 ">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">About Us</h1>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
          At <strong>DS TECH</strong>, we&apos;re more than just a tech company.
          We are a group of passionate individuals united by a common goal: to
          bring innovative solutions that help businesses evolve and thrive in
          the digital age.
        </p>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
          With a deep understanding of technology and an eagerness to explore
          new possibilities, we craft solutions that not only meet today&apos;s
          needs but also anticipate tomorrow&apos;s challenges. Our expertise
          spans software development, hardware integration, and top-notch
          technical support, all designed to help your business stay
          competitive.
        </p>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6">
          What drives us is the belief that technology can change the world for
          the better. From developing next-gen software to providing
          cutting-edge hardware solutions, our focus is always on creating
          lasting value for our clients. We&apos;re dedicated to supporting your
          business, solving your challenges, and helping you achieve your goals
          in an ever-changing digital landscape.
        </p>

        {/* Why Choose Us */}
        <div className="why-choose-us mt-10 bg-gray-100 py-8 px-6 rounded-md shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-lg text-gray-700 mb-4">
            Choosing DS TECH means choosing a partner who cares about your
            business. We put your needs first and provide the guidance,
            technology, and support necessary to move forward confidently. Our
            team is here for you, 24/7, ensuring you&apos;re never alone when
            facing a challenge.
          </p>
          <p className="text-sm md:text-lg text-gray-700">
            We take pride in being a company that blends innovation with
            practical solutions. Our unique approach, deep industry expertise,
            and customer-focused philosophy make us the right choice for
            businesses looking to leverage technology for success. If yo&apos;re
            ready to unlock new possibilities and grow with the times,
            we&apos;re here to make it happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
