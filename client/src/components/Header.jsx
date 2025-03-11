import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Header = () => {

  const { removeBg } = useContext(AppContext)
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
      {/* ------- Left Side --------- */}
      <div className='w-full lg:w-1/2 text-left'>
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove the <br className='max-sm:hidden' /> <span className='gradient-text'> background </span> from <br className='max-md:hidden' /> images for free.
        </h1>
        <p className='my-6 text-[16px] text-gray-500'>Have a challenging photo background to remove for a clean, distraction-free picture? Our free background remover app enables you to isolate and highlight the subject on a clear background with ease. That way, you can insert the image into any new design and make it look natural!

</p>
        <div>
          <input onChange={e => removeBg(e.target.files[0])} type="file" accept='image/*' id="upload1" hidden/>
          <label className='inline-flex gap-3 px-3 py-3.5 rounded-full cursor-pointer upload-gradient m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm'>Upload your image</p>
          </label>
        </div>
      </div>
      {/* -------- Right Side ------------ */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img_2} alt="" />
      </div>
    </div>
  )
}
 
export default Header
