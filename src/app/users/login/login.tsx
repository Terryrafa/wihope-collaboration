import React from 'react'
import bgmain from '../../components/assets/bg-main.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function login() {
  return (
    <div id='login' className='w-full h-screen text-black'>
       <Image src={bgmain} alt={'bg'}
       layout='fill'
       objectFit='cover'/>
    <div className='flex flex-col max-w-screen-lg mx-auto h-full pt-64 z-20'>
          <div className='flex flex-col max-w-screen-lg mx-auto p-12 rounded-md py-14 bg-white drop-shadow-lg z-10'>
            <div className='pb-6 mx-auto '>
              <p className='text-4xl font-bold items-center justify-between '>Login</p>
            </div>

      <div className='flex items-center mx-auto'>
        <form className='flex flex-col w-full md:w-full' action="" method='post'>
          <input 
          type="email" 
          name='email' 
          placeholder='Enter your email' 
          className='my-2 py-2 px-2 bg-transparent border-2 rounded-md'/>

          <input 
          type="password" 
          name='password' 
          placeholder='Enter your password'
          className='my-2 py-2 px-2 bg-transparent border-2 rounded-md'/>

        <div className='flex items-center mx-auto py-4'>
          <Link href={'/users/register'}>
            <p className='px-4 py-1 mx-2 border-2 rounded-lg drop-shadow-md bg-white'>Register</p>
          </Link>
          <button className='px-6 py-1 mx-2 border-2 rounded-lg bg-blue-500 text-white drop-shadow-md'>Login</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  )
}
