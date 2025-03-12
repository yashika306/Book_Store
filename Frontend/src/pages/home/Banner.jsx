import React from 'react'
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
  <div className='flex flex-col md:flex-row-reverse justify-between items-center px-10'>
  <div className='md:w-full w-full items-center md:justify px-20'>
  <img src={bannerImg} alt="" />
  </div>
   
  <div className='md:w-full w-full items-center md:justify'>
       <h1 className='md:text-5xl text-3xl font-medium mb-7'>New Releases This Week</h1>
       <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

       <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition">
          Subscribe
        </button>
   </div>

  
</div>
  )
}

export default Banner


