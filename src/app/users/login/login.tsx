import React from 'react'
import bgmain from '../../components/assets/bg-main.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function login() {
  return (
    <div id='login' className='w-full h-screen text-black'>
       {/* <Image src={bgmain} alt={'bg'} */}
       {/* layout='fill' */}
       {/* objectFit='cover'/> */}
    <div className='flex flex-col max-w-screen-lg mx-auto h-full pt-28 z-20 drop-shadow-xxl'>
          <div className='flex flex-col max-w-screen-lg mx-auto p-12 rounded-md py-14 bg-white drop-shadow-lg  z-10'>
            <div className='pb-6 mx-auto '>
              <p className='text-3xl font-bold items-center justify-between '>Login</p>
            </div>

      <div className='flex items-center mx-auto'>
        <form className='flex flex-col w-full md:w-full' action="" method='post'>
          
          <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input 
          type="email" 
          name='email' 
          placeholder='Enter your email' 
          className='px-3 py-2 bg-transparent text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 '/>
          </div>
          
          <div className='mb-2'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input 
          type="password" 
          name='password' 
          placeholder='Password'
          className='px-3 py-2 bg-transparent text-gray-900 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500'/>
          </div>

          <div className='flex items-center mx-auto py-4'>
          <button className='px-4 py-2 border-2 rounded-lg bg-blue-500 text-white drop-shadow-lg'>Login</button>
          </div>
          <div>
          <Link href={'/users/register'}>
          <p className='text-gray-900 text-sm flex'>{`if you don't have an account`} <p className='text-indigo-500 px-2'> Register </p> </p>
          </Link>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  )
}
