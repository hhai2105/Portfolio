import Image from 'next/image';
import React from 'react';
import malImg from '../public/assets/projects/malrec.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={malImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Myanimelist Recommendation System</h2>
                    <h3>React JS / Python</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>
                    A web application recommends user anime based on an anime they liked.
                </p>
                <p>
                    It uses a collaborative-filtering system with matrix factorization using svd to find the top anime that is the same based on user ratings.
                </p>
                <p>
                    The data used is from Kaggle:
                    https://www.kaggle.com/datasets/CooperUnion/anime-recommendations-database
                </p>
                <p>
                    Implemented with React, React-redux, Express
                </p>
                <a
                    href='https://github.com/1n0r1/MALRec'
                    target='_blank'
                    rel='noreferrer'
                >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1 '>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> React
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Python 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Numpy 
                        </p>
                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' /> Pandas 
                        </p>

                        <p className='text-gray-600 py-2 flex items-center'>
                            <RiRadioButtonFill className='pr-1' />  Scikit-learn
                        </p>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
        </div>
    );
};

export default crypto;
