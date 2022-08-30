import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/about.jpeg';
import Css from '../public/assets/about.jpeg';
import Javascript from '../public/assets/about.jpeg';
import ReactImg from '../public/assets/about.jpeg';
import Tailwind from '../public/assets/about.jpeg';
import Github from '../public/assets/about.jpeg';
import Firebase from '../public/assets/about.jpeg';
import NextJS from '../public/assets/about.jpeg'
import AWS from '../public/assets/about.jpeg';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
          <h3 className="py-4 text-black-600">
              Programming Languages
          </h3>
          <h4 className="py-2 text-gray-600">
              C, C++, Python, Java, Javascript, Bash, HTML5, CSS
          </h4>
          <h3 className="py-4 text-black-600">
              Libraries
          </h3>
          <h4 className="py-2 text-gray-600">
              ReactJS, NextJS, Express, Numpy, Pandas, Scikit-learn
          </h4>
          <h3 className="py-4 text-black-600">
              Databases
          </h3>
          <h4 className="py-2 text-gray-600">
              MongoDB, MySQL
          </h4>

          <h3 className="py-4 text-black-600">
              Tools
          </h3>
          <h4 className="py-2 text-gray-600">
              GNU/Linux, Unix, Git, Docker
          </h4>
      </div>
    </div>
  );
};

export default Skills;
