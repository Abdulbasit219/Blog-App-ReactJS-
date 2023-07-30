import React from 'react'
import './Footer.css'
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/Ai'
import { BiLogoGmail, BiLocationPlus } from 'react-icons/Bi'
import { BsFillTelephoneFill } from 'react-icons/Bs'

function Footer() {

  return (
    <>
      <div className='containers'>
          <div>
            <div className='rows'>

                <div className='columns'>
                <p className='text-white text-3xl font-extrabold'><span>.</span>Blog</p>
                <p className='text-white opacity-60 italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nesciunt culpa ratione recusandae obcaecati earum velit, ut repudiandae magnam facilis, repellat eligendi dolorem nisi et minus quod voluptatibus enim sapiente.</p>
                </div>
                
                <div className='text-white columns'>
                <p className='text-2xl'>Contact Us</p>
                
                <div className='pt-2 p-2 phone'><BsFillTelephoneFill/><p className='hover:text-gray-400'>+92 316 2956262</p></div>
                
                <div className='pt-2 p-2 gmail'><BiLogoGmail/><p className='hover:text-gray-400'>abdulbasitbasit076@gmail.com</p></div>
                
                <div className='pt-2 p-2 location'><BiLocationPlus/><p className='hover:text-gray-400'>Karachi</p></div>
                
                </div>
                
                <div className='text-white columns '> 
                  <p className='text-2xl'>Follow Us</p>
                  <div className='social-icon'>
                  <div className='pt-2 p-2 text-2xl'><a href="https://www.facebook.com/abdulbasitmaqsood.awan" className='hover:text-blue-500'><AiFillFacebook/></a></div>
                  <div className='pt-2 p-2 text-2xl'><a href="https://www.linkedin.com/in/abdul-basit-114a7322b/" className='hover:text-blue-500'><AiFillLinkedin/></a></div>
                  <div className='pt-2 p-2 text-2xl'><a href="#" className='hover:text-blue-300'><AiFillTwitterSquare/></a></div>
                  <div className='pt-2 p-2 text-2xl'><a href="https://www.youtube.com/channel/UCQZXLRaznfGuYPRMkpDIrGA" className='hover:text-red-300'><AiFillYoutube/></a></div>
                  </div>
                </div>     
            
            </div>
          </div>
                <div className='text-white p-2'>
                <hr className='w-[90%] mx-auto'/>
                <p className='text-sm text-center'>@2023 Copyright Viral-Blog.com</p>
                </div>
      </div>
    </>
  )
}

export default Footer