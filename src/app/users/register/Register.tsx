import React from 'react'
import { useState } from 'react'
import bgmain from '../../components/assets/bg-main.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function login() {
  // const [ registerEmail, setRegisterEmail ] = useState('')
  // const [ registerPassword, setRegisterPassword ] = useState('')
  return (
    <div id='login' className='w-full h-screen text-black'>
       <Image src={bgmain} alt={'bg'}
       layout='fill'
       objectFit='cover'/>
    <div className='flex flex-col max-w-screen-lg mx-auto h-full pt-64 z-20'>
          <div className='flex flex-col max-w-screen-lg mx-auto p-12 rounded-md py-14 bg-white drop-shadow-lg z-10'>
            <div className='pb-6 mx-auto '>
              <p className='text-4xl font-bold items-center justify-between '>Register</p>
            </div>

      <div className='flex items-center mx-auto'>
        <form className='flex flex-col w-full md:w-full' action="" method='post'>
          <input 
          // onChange={e => setRegisterEmail(e.target.value)}
          type="email" 
          name='email' 
          placeholder='Enter your email' 
          className='my-2 py-2 px-2 bg-transparent border-2 rounded-md'/>

          <input 
          // onChange={e => setRegisterPassword(e.target.value)}
          type="password" 
          name='password' 
          placeholder='Enter your password'
          className='my-2 py-2 px-2 bg-transparent border-2 rounded-md'/>

          <div className='flex items-center mx-auto py-4'>
          <Link href={'/users/login'}>
            <p className='px-6 py-1 mx-2 border-2 rounded-lg drop-shadow-md bg-white'>Login</p>
          </Link>
          <button className='px-4 py-1 mx-2 border-2 rounded-lg bg-blue-500 text-white drop-shadow-md'>Register</button>
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  )
}
