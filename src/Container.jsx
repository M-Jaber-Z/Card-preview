import React from 'react'
import Card from './Card'

import suvs from './images/icon-suvs.svg'
import sednas from './images/icon-sedans.svg'
import luxury from './images/icon-luxury.svg'

function Container() {
    return (
        <div className='w-270 h-150 justify-center items-center rounded-2xl flex flex-col md:flex-row'>
            <Card image={sednas} title={'SEDNAS'} color={'hsl(31, 77%, 52%)'} />
            <Card image={suvs} title={'SUVS'} color={'hsl(184, 100%, 22%)'} />
            <Card image={luxury} title={'LUXURY'} color={'hsl(179, 100%, 13%)'} />
        </div>
    )
}

export default Container