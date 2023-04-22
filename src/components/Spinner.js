import React from 'react'
import spinner from '../Spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center mt-5'>
      <img src={spinner} className='setbgImg opacity-75'/>
    </div>
  )
}

export default Spinner
