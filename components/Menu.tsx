import React from 'react'
import Image from 'next/image'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'


const Menu = () => {
    return (
        <div className='fixed top-[15%] left-[8.25%]'>
            <div className='w-[240px] h-16 mb-3 rounded-[13px] bg-gray-900'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-11 h-11 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1] cursor-pointer'>
                        <Image src="/img/Snapchat-1175385830.jpg" alt="Profile" width="44" height="44" />
                    </div>
                    <div className='px-4 flex flex-col text-white'>
                        <div className=' cursor-pointer'>Amani</div>
                        <div className='text-[gray] text-sm '>@KhutsoSefoto</div>
                    </div>
                </div>
            </div>
            <div className='w-[240px] h-96 mb-3 rounded-[13px] bg-gray-900'>
                <ul className='w-full h-full flex flex-col items-start'>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <HomeOutlinedIcon className='text-lg text-[gray]' />
                        <span className='ml-4'>Home</span>
                    </li>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <ExploreOutlinedIcon className='text-lg text-[gray]' />
                        <div className='ml-4'>Explore</div>
                    </li>
                    <li className='relative w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <NotificationsOutlinedIcon className='text-lg text-[gray]' />
                        <div className="w-[20px] h-[15px] bg-[red] rounded-[25%] text-white flex justify-center items-center text-[10px] font-bold absolute top-[8px] left-[42px]">9+</div>
                        <span className='ml-4'>Notifications</span>
                    </li>
                    <li className='relative w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <MessageOutlinedIcon className='text-lg text-[gray]' />
                        <div className="w-[17px] h-[17px] bg-[red] rounded-[50%] text-white flex justify-center items-center text-[10px] font-bold absolute top-[8px] left-[42px]">3</div>
                        <span className='ml-4'>Messages</span>
                    </li>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <BookmarksOutlinedIcon className='text-lg text-[gray]' />
                        <span className='ml-4'>Bookmarks</span>
                    </li>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <AnalyticsOutlinedIcon className='text-lg text-[gray]' />
                        <span className='ml-4'>Analytics</span>
                    </li>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <PaletteOutlinedIcon className='text-lg text-[gray]' />
                        <span className='ml-4'>Theme</span>
                    </li>
                    <li className='w-full pl-7 py-[12px] flex items-center hover:scale-110 hover:text-fuchsia-500 border-l-4 border-l-transparent hover:border-l-fuchsia-500 duration-300 hover:bg-gray-800 cursor-pointer'>
                        <SettingsOutlinedIcon className='text-lg text-[gray]' />
                        <span className='ml-4'>Settings</span>
                    </li>
                </ul>
            </div>
            <div>
                <button className='w-[240px] h-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 border-none rounded-full flex justify-center items-center text-sm'>Create Post</button>
            </div>
        </div >
    )
}

export default Menu