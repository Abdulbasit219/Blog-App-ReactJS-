import './Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
        <>
        <section className='sec'>
            <div className='bground'>
            <div className='parent'>
                <div>
                    <h4>Ready to get Started</h4>
                    <h4>Talk to us Today</h4>
                </div>
                <div className='btn-div'>
                    <Link>
                        <button className='btn btn-primary'>Get Started</button>
                    </Link>
                </div>
            </div>
            </div>
        </section>
        
        
        <footer className='cont-bground'>
            <div className='parent'>
                <div className='child'>
                    <h3>Viral Blog</h3>
                </div>
            </div>
        </footer>
        </>
  )
}

export default Footer