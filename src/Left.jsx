import React from 'react'

function Left() {
    return (
        <div className='w-5/10 h-full text-center flex-col flex justify-around text-white items-center bg-[hsl(241,70%,47%)] rounded-4xl'>
            <h1 className='text-2xl'>Your Result</h1>
            <section className='h-52 w-52 rounded-full bg-[hsl(241,74%,40%)] flex flex-col justify-center items-center text-white'>
                <h1 className='text-6xl m-4'>76%</h1>
                <p>of 100%</p>
            </section>
            <article>
                <h1 className='text-2xl m-4'>Great</h1>
                <p>Your scored higher that 65% of the people who have taken these tests.</p>
            </article>
        </div>
    )
}

export default Left