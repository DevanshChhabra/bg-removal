import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Upload = () => {

  const {removeBg} = useContext(AppContext)

  return (
    <div className='pb-16'>
        {/* Title */}
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 py-6 font-semibold gradient-heading md:py-16'>See the magic. Try now</h1>
        
        <div className='text-center mb-24'>
            <input onChange={e => removeBg(e.target.files[0])} type="file" accept='image/*' id="upload2" hidden/>
            <label className='inline-flex gap-3 px-3 py-3.5 rounded-full cursor-pointer m-auto hover:scale-105 transition-all duration-700 upload-gradient' htmlFor="upload2">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className='text-white text-sm'>Upload your image</p>
            </label>
        </div>
    </div>
  )
}

export default Upload
