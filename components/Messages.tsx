import React from 'react'
import Image from 'next/image'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

const Messages = () => {
    return (
        <div className='w-full h-[460px] rounded-[13px] bg-gray-900'>
            <div className='px-4 py-4 flex flex-col items-start'>
                <div className='pb-4 w-full h-full flex justify-between items-center'>
                    <div className='font-bold'>Messages</div>
                    <EditOutlinedIcon className='text-xl  cursor-pointer' />
                </div>
                <div className='w-[268px] h-11 mb-4 rounded-full flex justify-start items-center bg-gray-800'>
                    <SearchOutlinedIcon className='ml-4 text-xl text-[gray]' />
                    <input className='w-full ml-4 outline-none border-none text-white bg-transparent text-sm' type="search" placeholder="Search for users and posts" name="search" />
                </div>
                <div className='text-[gray] pb-2 w-full h-full flex justify-around items-center text-xs font-bold border-b-4 border-solid border-gray-800'>
                    <div className='text-white cursor-pointer'>Primary</div>
                    <div className='cursor-pointer'>General</div>
                    <div className='text-fuchsia-500 cursor-pointer'>Requests(3)</div>
                </div>
            </div>
            <div className='flex flex-col items-start'>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/01e8eea9408282836066fed67db0de1c.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Jessica S.</div>
                        <div className='text-[gray] text-xs '>I'm on my way, please don't bail o...</div>
                    </div>
                </div>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/1a0edf04af3f3e76e8874645a93a7493.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Mosa Sefoto</div>
                        <div className='text-white text-xs '>Oe nyaka neng?</div>
                    </div>
                </div>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/d305977e0cddf7800a05c8c62eded1a4.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Thami M.</div>
                        <div className='text-white text-xs '>Pull through so we can finish it</div>
                    </div>
                </div>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/20221225_224116.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Leo</div>
                        <div className='text-[gray] text-xs'>Ok bro!</div>
                    </div>
                </div>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/81c2e8a6d2f25457a64c5ee7a741c628.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Siya Khoza</div>
                        <div className='text-[gray] text-xs '>We made the target. It's looking g...</div>
                    </div>
                </div>
                <div className='pl-4 w-full h-full py-[6px] flex items-center border-l-4 border-l-transparent hover:border-l-fuchsia-500 hover:bg-gray-800'>
                    <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/1fbfc80273446cdc0985513bd5923d55.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white cursor-pointer'>
                        <div className='text-sm font-bold'>Melanie</div>
                        <div className='text-white text-xs '>Love you.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages