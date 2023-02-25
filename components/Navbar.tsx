import React from 'react'
import Image from 'next/image'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[65px] flex justify-between items-center px-28 bg-gray-900 text-white'>
            <div className=''>CHAT_APP</div>
            <div className='w-[450px] h-11 rounded-full flex justify-start items-center bg-gray-800'>
                <SearchOutlinedIcon className='ml-4 text-xl text-[gray]' />
                <input className='w-full ml-4 outline-none border-none text-white bg-transparent text-sm' type="search" placeholder="Search for users and posts" name="search" />
            </div>
            <div className='w-40 flex justify-between items-center'>
                <button className="cursor-pointer">
                    <DarkModeOutlinedIcon className="icon" />
                </button>
                <button className='h-9 px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 border-none rounded-full flex items-center text-sm'>Create</button>
                <div className='w-9 h-9 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]  cursor-pointer'>
                    <Image src="/../public/img/Snapchat-1175385830.jpg" alt="Profile" width="36" height="36" />
                </div>
            </div>
        </div>
    )
}

export default Navbar