import React from 'react'
import hot from '../assets/hotdog.png'
import {TypeAnimation} from 'react-type-animation'

const Destaques = () => {
  return (
    <div>
         <div className=' my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row
                       justify-center align-center' id='inicio'>
            
            <div className=' flex-col my-auto mx-auto'>
                <p className='md:text-5xl sm:text-xl font-bold text-red-300'>Happy HotDog</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                <TypeAnimation
                sequence={[
                    "+Sabor!",
                    1000,
                    "+Experiência",
                    1000,
                    "O melhor do Brasil!",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>Felicidade em cada mordida. </p>
            </div>
            
        </div>
        <div className='my-auto'>
                <img className=' rounded-xl w-[300px] sm:w-[500px] mx-auto h-auto ' src={hot} alt="" />
        </div>

        </div>
    </div>
  )
}

export default Destaques
