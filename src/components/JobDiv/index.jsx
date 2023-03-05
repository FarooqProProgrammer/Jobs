import React from 'react'
import { BiTimeFive } from "react-icons/bi"
import Whatsapp from "../../assets/index.png"



export default function Job() {
    return (
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
            <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:text-blueColor shadow-lg shadow-geyIsh-400/700 hover:shadow-lg">
                <span className='flex justify-between items-center gap-4'>
                    <h3 className='text-[16px] font-semibold text-textColor '>Web Developer</h3>
                    <span>
                        <BiTimeFive />
                    </span>
                </span>
                <h6 className='text-[#ccc]'>Canada</h6>
                <p className="text-[16px] text-[#959595] pt-[12px] border-t-[2px] mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellendus.
                </p>


                <div className="company flex items-center gap-2">
                    <img src={Whatsapp} alt="Company Logo" className='w-[10%]' />
                    <span className='text-[14px] py-[1rem] block '>Novac Linux Co.</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor '>

                </button>
            </div>
        </div>
    )
}
