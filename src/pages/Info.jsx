import React from 'react'

function info() {
  return (
    <div className='info'>
      <h1 className='font-extrabold text-[100px] text-blue-800 mb-0 line-clamp-1'>Project Name : <span className='text-green-400 underline leading-tight'>Ecomzy</span></h1>
      <p className='center text-lg m-0 text-green-500'>(A frontend Design of the Ecommerse site)</p>

      <div className='text-[45px] font-extrabold text-center'>
      <h1 className='text-blue-950'>Developed By : <span className="text-green-400">Abhishek Kumar</span></h1>
      <h1 className='text-blue-950'>Registration Number : <span className="text-green-400">21020445001</span></h1>
      <h1 className='text-blue-950'>Branch : <span className="text-green-400">Computer Science and Engineering</span></h1>
      <h1 className='text-blue-950'>Semester : <span className="text-green-400">4<sup className='text-green-500'>th</sup></span></h1> 
      <h1 className='text-blue-950'>Session : <span className="text-green-400">2021-2025</span></h1>
      
      <h1 className='text-blue-950'>Mentor : <span className="text-green-400">Rup Kamal Sir</span></h1>
      </div>

      <div>
        <h1 className ="text-[45px] font-extrabold text-center"> Technologies Used : <span className="text-green-400">ReactJs, Tailwind Css, Redux</span></h1>
      </div>
    </div>
  )
}

export default info