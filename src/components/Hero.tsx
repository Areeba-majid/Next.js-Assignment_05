import React from 'react'
import Image from "next/image";




const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start h-screen px-4 lg:px-16'>     
        <div className='w-full lg:w-1/2 text-center mt-12 lg:mt-32 lg:text-left  '>
           
            <h1 className='text-[24px] sm:text-[28px] lg:text-[40px] text-[#000000] font-bold font-bodoni xl:h-[189px]  xl:w-[496px] xl:text-[40px] '>
                IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='text-[16px] sm:text-[18px] lg:text-[24] text-[#A29875] font-bodoni xl:text-[30px] leading-relaxed '>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>

            <button className='bg-[#A29875] py-2 px-8 sm:px-10 text-[#FFFFFF] font-bodoni transition duration-300 ease-in-out rounded mt-8 lg:mt-8 hover:bg-[#000000] xl:text-[30px] xl:w-[299px] xl:h-[58px] xl:rounded-md xl:mt-16'>
              Explore Now
            </button>
        </div>

        <div className=' justify-center items-center   pt-10  w-full lg:w-1/2 flex mt-10  lg:mt-14 xl:mt-3  '>
        <Image 
          src="/image/catlog.jpg" 
          alt="Product Image" 
          height={700} 
          width={400} 
          className="max-w-full sm:max-w-[350px] lg:max-w-[400px] rounded-pl  h-auto transition duration-300 object-contain ease-in-out"
        />  
      </div>
    </div>
  );
};

export default Hero;


