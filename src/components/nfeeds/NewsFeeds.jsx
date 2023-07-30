import React from 'react'
import { useState } from 'react'

function NewsFeeds({ title, content, category }) {

    const [isOpen, setIsOpen] = useState(false)

    const parastyle = {
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        display: '-webkit-box'
    }

    return (

        <div className='mx-auto w-[90%] shadow mb-5 rounded-md p-2'>
            <div className='bg-white hover:border-4 border-blue-200 rounded-md'>
                <p className='cursor-pointer hover:text-blue-400 font-bold text-2xl'>{title}</p>
                <p style={isOpen ? null : parastyle}
                dangerouslySetInnerHTML={{ __html: content }} />
                <p className='opacity-40 flex '>Category: {category}</p>
                <button className='m-2 btn btn-secondary' 
                onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? 'read less' : 'read more...'}</button>    
            </div>
        </div>
    )
}

export default NewsFeeds

