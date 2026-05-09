import React from 'react'

const CommonHead = ({main, sub}) => {
  return (
    <>
      <h2 className=" py-4 text-4xl md:text-[48px] font-Poppons font-bold text-white">{sub}
        <span className='text-transparent bg-linear-to-r from-primary via-accent to-secondary bg-clip-text'>{main}</span></h2>
    </>
  )
}

export default CommonHead
