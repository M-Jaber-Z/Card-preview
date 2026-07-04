import React from 'react'

function InnerComp(prop) {

    return (
        <div className='w-7/10 h-10 flex justify-around items-center p-6 rounded-4xl' style={
            { backgroundColor: prop.Color }
        }>
            <section className='flex justify-baseline items-center'>
                <img src={prop.image} />
                <p className='m-3'>{prop.name}</p>
            </section>
            <section>
                <h2>{prop.info}</h2>
            </section>
        </div>
    )
}

export default InnerComp