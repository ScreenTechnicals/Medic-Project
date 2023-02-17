import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='w-screen h-[70vh] flex justify-center items-center'>
            <ImSpinner2 className="animate-spin text-4xl text-[#0059ff]" />
    </div>
  )
}

export default Loading