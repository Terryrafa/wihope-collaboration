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
    <div className='flex flex-col max-w-scre mx-auto h-full pt-28 z-20'>
          <div className='flex flex-col max-w-screen-lg mx-auto p-12 rounded-lg py-14 bg-white drop-shadow-lg z-10'>
            <div className='pb-6 mx-auto '>
              <p className='text-3xl font-bold items-center justify-between '>Register</p>
            </div>

      <div className='flex items-center mx-auto'>
        <form className='flex flex-col w-full md:w-full' action="" method='post'>

        <div className='mb-2'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
        <input 
          // onChange={e => setRegisterEmail(e.target.value)}
          type="name" 
          name='name' 
          placeholder='Enter your name' 
          className='px-3 py-2 bg-transparent border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
        </div>

        <div className='mb-2'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
        <input 
          // onChange={e => setRegisterEmail(e.target.value)}
          type="email" 
          name='email' 
          placeholder='Enter your email' 
          className='px-3 py-2 bg-transparent border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500'/>
        </div>

        <div className='mb-2'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
        <input 
          // onChange={e => setRegisterPassword(e.target.value)}
          type="password" 
          name='password' 
          placeholder='Enter your password'
          className='px-3 py-2 bg-transparent border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 '/>
        </div>

        <div className='flex items-center mx-auto py-4'>
        <button className='px-4 py-2 border-2 rounded-lg bg-blue-500 text-white drop-shadow-md'>Register</button>
        </div>
          
        <div className='flex'>
          <Link href={'/users/login'}>
          <div className='text-gray-600 text-sm flex'>Already have an account?  <p className='text-indigo-500'> Login</p></div>
          </Link>
        </div>
        
        </form>

      </div>
      </div>
    </div>
    </div>
  )
}
