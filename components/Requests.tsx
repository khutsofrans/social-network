import React from 'react'
import Image from 'next/image'

const Requests = () => {
    return (
        <div className='w-full h-[460px]'>
            <div className='px-4 py-4 flex flex-col items-start'>
                <div className='w-full h-full font-bold'>Requests</div>
            </div>
            <div className='mb-3 w-full h-[120px] rounded-[13px] bg-gray-900'>
                <div className='p-4 flex flex-col justify-between items-start'>
                    <div className='pb-4 w-full h-full flex items-start'>
                        <div className='w-9 h-9 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]'>
                            <Image src="/img/01e8eea9408282836066fed67db0de1c.jpg" alt="Profile" width="44" height="44" />
                        </div>
                        <div className='px-4 flex flex-col text-white'>
                            <div className='text-sm font-bold'>S A R R A H</div>
                            <div className='text-[gray] text-xs '>5 mutual friends</div>
                        </div>
                    </div>
                    <div className='w-full h-full flex items-start'>
                        <button className='mr-2 h-10 w-[65px] bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Accept</button>
                        <button className='ml-2 h-10 w-[65px] bg-gray-800 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Decline</button>
                    </div>
                </div>
            </div>
            <div className='mb-3 w-full h-[120px] rounded-[13px] bg-gray-900'>
                <div className='p-4 flex flex-col justify-between items-start'>
                    <div className='pb-4 w-full h-full flex items-start'>
                        <div className='w-9 h-9 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]'>
                            <Image src="/img/01e8eea9408282836066fed67db0de1c.jpg" alt="Profile" width="44" height="44" />
                        </div>
                        <div className='px-4 flex flex-col text-white'>
                            <div className='text-sm font-bold'>Tony Watts</div>
                            <div className='text-[gray] text-xs '>12 mutual friends</div>
                        </div>
                    </div>
                    <div className='w-full h-full flex items-start'>
                        <button className='mr-2 h-10 w-[65px] bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Accept</button>
                        <button className='ml-2 h-10 w-[65px] bg-gray-800 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Decline</button>
                    </div>
                </div>
            </div>
            <div className='mb-3 w-full h-[120px] rounded-[13px] bg-gray-900'>
                <div className='p-4 flex flex-col justify-between items-start'>
                    <div className='pb-4 w-full h-full flex items-start'>
                        <div className='w-9 h-9 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]'>
                            <Image src="/img/01e8eea9408282836066fed67db0de1c.jpg" alt="Profile" width="44" height="44" />
                        </div>
                        <div className='px-4 flex flex-col text-white'>
                            <div className='text-sm font-bold'>Grace Mashaba</div>
                            <div className='text-[gray] text-xs '>2 mutual friends</div>
                        </div>
                    </div>
                    <div className='w-full h-full flex items-start'>
                        <button className='mr-2 h-10 w-[65px] bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Accept</button>
                        <button className='ml-2 h-10 w-[65px] bg-gray-800 border-none rounded-full flex justify-center items-center text-sm cursor-pointer'>Decline</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requests