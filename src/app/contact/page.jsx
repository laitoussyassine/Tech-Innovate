import React from 'react'
import InputField from '@/components/resusableComponents/InputField'
import SubmitButton from '@/components/resusableComponents/SubmitBuuton'
import TitleLabel from '@/components/resusableComponents/TitleLabel'
// import TitleLabel from '@/components/resusableComponents/titleLabel'
import { MdOutlineDone } from "react-icons/md";


const contact = () => {
  return (
    <div className='mx-8'>
        <h1>Contact Us</h1>
      <div className='grid grid-cols-6 gap-6 py-10 bg-black text-white'>
        {/* first div */}
        <div className='lg:col-span-2 col-span-full'>
          <p className='text-textSecond font-bold my-4'>Get In Touch</p>
          <h3 className='font-bold text-4xl my-4'>Let’s Talk For your <span className='text-mainColor'>Next Projects</span></h3>
          <p className='text-textSecond font-bold'>Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
          <ul className='flex flex-col gap-5 my-4'>
            <li className='flex gap-5'>
            <MdOutlineDone className='bg-mainColor rounded-2xl text-2xl' />
              <p>2+ Years Of Experience</p>
            </li>
            <li className='flex gap-5'>
            <MdOutlineDone className='bg-mainColor rounded-2xl text-2xl' />
              <p>Professional Web Designer</p>
            </li>
            <li className='flex gap-5'>
              <MdOutlineDone className='bg-mainColor rounded-2xl text-2xl' />
              <p>web apps development</p>
            </li>
            <li className='flex gap-5'>
              <MdOutlineDone className='bg-mainColor rounded-2xl text-2xl' />
              <p>Custom Design Support</p>
            </li>
          </ul>
        </div>
        
        {/* div 2 */}
        <div className='lg:col-span-4 col-span-full'>
          <div className='flex flex-col gap-5'>
          <div className='flex gap-10'>
            <div className='w-1/2'>
              <TitleLabel title={"full name"} />
              <InputField placeholder={"Richard D.Hammond"} className={""}/>
            </div>
            <div className='w-1/2'>
              <TitleLabel title={"email address"} />
              <InputField placeholder={"support@gmail.com"} className={""}/>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='w-1/2'>
              <TitleLabel title={"phone  number"} />
              <InputField placeholder={"+880 (123) 456 56"} className={""}/>
            </div>
            <div className='w-1/2'>
              <TitleLabel title={"subject"} />
              <InputField placeholder={"subject"} className={""}/>
            </div>
          </div>
          </div>
          <div className='mt-2'>
              <TitleLabel title={"message"} />
              <InputField placeholder={"write message"} className={"pb-20"}/>
          </div>
          <SubmitButton className={"w-3/7 py-2 px-6 rounded-lg my-5 hover:text-gray-600 "} title={"SEND MESSAGE >"} />
        </div>
      </div>
    </div>
  )
}

export default contact