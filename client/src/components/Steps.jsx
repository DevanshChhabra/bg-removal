import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
       <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-2 font-semibold gradient-heading'>Steps to remove background <br /> image in seconds</h1>
       <div className='flex items-stretch flex-wrap md:flex-nowrap gap-6 mt-16 xl:mt-24 justify-center  '>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.upload_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Upload image</p>
                    <p className='text-sm text-neutral-500 mt-1'>For best results, choose<br className='max-sm:hidden' /> an image where the subject has clear edges with nothing overlapping.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.remove_bg_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Remove background</p>
                    <p className='text-sm text-neutral-500 mt-1'>Our free image background<br className='max-sm:hidden' /> remover will automatically detect and  remove the background from your image.</p>
                </div>
            </div>

            <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                <img className='max-w-9' src={assets.download_icon} alt="" />
                <div>
                    <p className='text-xl font-medium'>Download image</p>
                    <p className='text-sm text-neutral-500 mt-1'>Save your transparent background image in high quality for further use.  </p>
                </div>
            </div>

       </div>
    </div>
  )
}

export default Steps
