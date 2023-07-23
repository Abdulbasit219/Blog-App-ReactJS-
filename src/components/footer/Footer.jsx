import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <>
      <div className='background text-white'>
        <div className='containers mx-auto mt-6'>
          <div className='rows'>
          
            <div className='columns'>
              Home Write Blog Contact Newsfeed
            </div>
          
            <div className='columns'>Contact Phone Gmail</div>
            
            <div className='columns'>Follow Us
              <div className='flex'>
                <p>facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Youtube</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer