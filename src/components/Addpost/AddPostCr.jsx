import React from 'react'
import { useState } from 'react'
import { PiNotePencilDuotone } from 'react-icons/Pi'
import { RiDeleteBin5Fill } from 'react-icons/Ri'

function AddPostCr(props) {

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
        <p className='cursor-pointer hover:text-blue-400 font-bold text-2xl'>{props.title}</p>
        <p style={isOpen ? null : parastyle}
          dangerouslySetInnerHTML={{ __html: props.content }} />
        <p className='opacity-40 flex '>Category: {props.category}</p>
        <div className='flex justify-between'>
          <button className='m-2 btn btn-secondary'
            onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? 'read less' : 'read more...'}</button>
          <div className='p-2 m-2 '>
            <button className='ml-2 text-4xl text-red-500 hover:text-gray-500' title='Edit Blog' onClick={props.edit}><PiNotePencilDuotone /></button>
            <button className='ml-2 text-4xl text-red-500 hover:text-gray-500' title='Delete blog' onClick={props.delete}><RiDeleteBin5Fill /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddPostCr
