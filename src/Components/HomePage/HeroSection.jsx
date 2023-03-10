import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


//Assets
import hero from '../../Assets/HeroSection/Hero.png'

function HeroSection() {
  const { isActive } = useSelector((state) => state.background)

  return (
    <div className='flex justify-center flex-col-reverse md:flex-row md:justify-between items-center mt-12 gap-10 md:gap-0'>
    
         <div className='space-y-12  flex-col md:text-start text-center md:space-x-6'>
                <h1 className=' text-[#3C9379] text-[25px] md:text-[50px] font-semibold'>
             <span className={isActive ? "text-[white]" : 'text-[black]'}>Best Place to Buy<br/></span>Everything.</h1>

                <p className='w-[300px] md:w-[500px]'>At Bachira, you can shop for all your favorite beauty brands, clothes,
                                            household products and more at a single place.</p>
                <Link to='/products'>
                
                <button
               
               className='transition-all ease-in-out delay-100 text-[20px] px-3 py-2 border-2 border-[#3C9379] bg-[#3C9379] text-[#fff] rounded-2xl hover:bg-[#4c7e6f] hover:text-[#fff] hover:border-[#4c7e6f] mt-12'>Shopping Now</button>
                </Link>

         </div>


         <div>
            <img src={hero} draggable={false} alt="hero img" />
         </div>
    </div>
  )
}

export default HeroSection
