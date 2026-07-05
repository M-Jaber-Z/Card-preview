import React from 'react'
function Card({ image, title, color }) {
    return (
        <div className=' w-1/3 h-full p-10 flex flex-col justify-around text-white' style={{
            backgroundColor: color
        }}>
            <img src={image} className='w-20 h-10' />
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p>Choose a sednas for its affordability and excellent fuel econemy. Ideal for cusing in the city or on you next road trip.</p>
            <button className='w-40 h-10 border-2 p-5 flex justify-center items-center rounded-3xl hover: cursor-pointer'>Learn more</button>
        </div>
    )
}

export default Card