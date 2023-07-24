import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/Ai'
import { BiLogoGmail, BiLocationPlus } from 'react-icons/Bi'
import { BsFillTelephoneFill } from 'react-icons/Bs'

function Footer() {

  return (
    <>
    <footer>
      <div className='background text-white'>
        <div className='containers mx-auto mt-6'>
          <div className='rows'>
          
            <div className='columns logo flex flex-col'>
              <p><span>.</span>Blog</p>
              <div className='ml-2 shadow'><button className='btn btn-secondary'>Get Started</button></div>
            </div>
          
            <div className='columns text-xl'>
              Contact US
            <div className='text-2xl mt-3 flex'><BsFillTelephoneFill/><a href="#"><p className='text-sm'>+92 316 2956262</p></a></div>
            <div className='text-2xl mt-3 flex'><BiLogoGmail/><a href="#"><p className='text-sm'>abdulbasitbasit076@gmail.com</p></a></div>
            <div className='text-2xl mt-3 flex'><BiLocationPlus/><a href="#"><p className='text-sm'>Idara Noor e Haq</p></a></div>
              
            </div>
            
            <div className='columns text-xl'>Follow Us
              <div className='flex text-3xl'>
                <a href="#"><p className='hover:text-blue-500'><AiFillFacebook/></p></a>
                <a href="#"><p className='hover:text-blue-500'><AiFillLinkedin/></p></a>
                <a href="#"><p className='hover:text-black-300'><AiFillTwitterSquare/></p></a>
                <a href="#"><p className='hover:text-red-500'><AiFillYoutube/></p></a>
              </div>
            </div>
          
          
          </div>
            <div className='flex h-8 justify-center'>
                <p className='text-sm'>@2023 Copyright Viral-Blog.com</p>
            </div>
        </div>
      </div>
      </footer>
    </>
  )
}

export default Footer