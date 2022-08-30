import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ukgImg from '../public/assets/projects/ukg.png';
import semanticImg from '../public/assets/projects/project-semantic.png'
import randomforestImg from '../public/assets/projects/Random Forest Diagram.webp'
import malImg from '../public/assets/projects/malrec.png';
import twitchImg from '../public/assets/about.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Project Semantic'
              backgroundImg={semanticImg}
              projectUrl='/semantic'
              tech='ReactJs, Python, MongoDB'
          />
          <ProjectItem
            title='Random Forest Ensemble'
              backgroundImg={randomforestImg}
              projectUrl='/randomForest'
              tech='Python, Numpy, Pandas'

          />
          <ProjectItem
              title='UKG Inbox Service'
              backgroundImg={ukgImg}
              projectUrl='/ukg'
              tech='ReactJS, mongoDB'
          />
            <ProjectItem
                title='Anime Recommendation System'
                backgroundImg={malImg}
                projectUrl='/mal'
                tech='React, Python'
            />
        </div>
      </div>
    </div>
  );
};

export default Projects;
