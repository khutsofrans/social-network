import React from 'react'
import Messages from './Messages'
import Requests from './Requests'

const Right = () => {
    return (
        <div className='mt-12'>
            <div className='w-[300px]'>
                <Messages />
                <Requests />
            </div>
        </div>
    )
}

export default Right