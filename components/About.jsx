import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/skills/face.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
              <h1 className='py-4 text-gray-700'>
                  Hi, I&#39;m <span className='text-[#5651e5]'> Hai</span>
            </h1>
            <p className="py-2 text-gray-600">
                I&apos;m a junior at the University of Massachusetts, Amherst, majoring in Computer Science<br/>
                with skills in Machine Learning, Data Analysis, and Software Engineering

                I love learning, building projects, and solving problems by creating software.
            </p>
              <p className="py-2 text-gray-600">
                  I love learning, building project, solving problems by creating softwares. 
              </p>

              <Link href="/#contact">
                  <p className="py-2 text-gray-600 underline cursor-pointer">
                      Connect With me
                  </p>
              </Link>
        </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
