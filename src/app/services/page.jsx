import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function services() {
  return (
    <>
      <div className='text-white mx-8 my-10'>
        <div className='flex flex-col justify-center items-center gap-4 my-10'>
          <p className='text-sm font-extrabold text-serviceBoxTitle'>Popular Services</p>
          <div className=''>
            <h2 className='text-2xl md:text-4xl md:w-2/3 mx-auto text-center font-extrabold'>My <span className='text-mainColor'>Special Service</span> For your Business Development</h2>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-8'>
          <div className='lg:col-span-2 col-span-full '>
            <div className='group flex lg:flex-row  justify-between  gap-5 flex-col rounded-xl border border-slate-600 hover:delay-200	 hover:border-mainColor bg-navbarBg p-10'>
              <p className='text-xl font-semibold '>01.</p>
              <div>
                <h4 className='text-xl mb-2 font-bold'>Brand Identity Design</h4>
                <p className='text-serviceBoxTitle font-bold'>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <GoArrowUpRight className='bg-black group-hover:bg-mainColor group-hover:text-black cursor-pointer text-textSecond group-hover:delay-200	rounded-full text-4xl p-1 font-extrabold' />
            </div>
          </div>
          <div className='lg:col-span-2 col-span-full '>
            <div className='group flex lg:flex-row gap-5 justify-between flex-col rounded-xl border border-slate-600 hover:delay-200	 hover:border-mainColor bg-navbarBg p-10'>
              <p className='text-xl font-semibold '>02.</p>
              <div>
                <h4 className='text-xl mb-2 font-bold'>Website Design</h4>
                <p className='text-serviceBoxTitle font-bold'>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <GoArrowUpRight className='bg-black group-hover:bg-mainColor group-hover:text-black cursor-pointer text-textSecond group-hover:delay-200	rounded-full text-4xl p-1 font-extrabold' />
            </div>
          </div>
          <div className='lg:col-span-2 col-span-full '>
            <div className='group flex lg:flex-row gap-5 justify-between flex-col rounded-xl border border-slate-600 hover:delay-200	 hover:border-mainColor bg-navbarBg p-10'>
              <p className='text-xl font-semibold '>03.</p>
              <div>
                <h4 className='text-xl mb-2 font-bold'>Website Development</h4>
                <p className='text-serviceBoxTitle font-bold'>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <GoArrowUpRight className='bg-black group-hover:bg-mainColor group-hover:text-black cursor-pointer text-textSecond group-hover:delay-200	rounded-full text-4xl p-1 font-extrabold' />
            </div>
          </div>
          <div className='lg:col-span-2 col-span-full '>
            <div className='group flex lg:flex-row gap-5 justify-between flex-col rounded-xl border border-slate-600 hover:delay-200	 hover:border-mainColor bg-navbarBg p-10'>
              <p className='text-xl font-semibold '>04.</p>
              <div>
                <h4 className='text-xl mb-2 font-bold'>SEO & Digital Marketing</h4>
                <p className='text-serviceBoxTitle font-bold'>Dignissimos ducimus blanditiis praesen</p>
              </div>
              <GoArrowUpRight className='bg-black group-hover:bg-mainColor group-hover:text-black cursor-pointer text-textSecond group-hover:delay-200	rounded-full text-4xl p-1 font-extrabold' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default services