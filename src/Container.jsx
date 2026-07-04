import React from 'react'
import Left from './Left'
import Right from './Right'

function Container() {
    return (
        <div className=' w-6/10 h-7/10 flex justify-center items-center bg-white rounded-tr-4xl rounded-br-4xl'>
            <Left />
            <Right />
        </div>
    )
}

export default Container