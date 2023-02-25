import React from 'react'
import Image from 'next/image'

const Stories = () => {
    return (
        <div className='w-full h-[190px] mb-3 flex items-center'>
            <div className='mr-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/Snapchat-1175385830.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/../public/img/Snapchat-1175385830.jpg" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs font-bold'>Your Story</div>
                </div>
            </div>
            <div className='mx-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/4e830ffa1968349def3b007f85990559.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/img/01e8eea9408282836066fed67db0de1c.jpg" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs'>Jessica Sithole</div>
                </div>
            </div>
            <div className='mx-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/f51c3eaf9e8dc753338dd1dc0fa03d36.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/img/ad2cb128067c0f66a43d2f26310522bf.jpg" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs'>Cleo</div>
                </div>
            </div>
            <div className='mx-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/20221225_224116.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/img/695122d3242c6e1d626fbc7ada9bf7ec.jpg" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs'>Doug Johnson</div>
                </div>
            </div>
            <div className='mx-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/20230116_011534.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/img/AREmoji_20221127_043455_6453.png" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs'>Amani Silas</div>
                </div>
            </div>
            <div className='ml-1 w-[95px] h-[180px] rounded-[13px] bg-[url("/img/20230107_173312.jpg")] bg-cover bg-center hover:scale-110 duration-300 cursor-pointer'>
                <div className='pl-4 w-full h-full flex flex-col justify-between items-start'>
                    <div className='mt-4 w-8 h-8 flex justify-center items-center rounded-full border-2 border-fuchsia-500 overflow-hidden aspect-[1/1]'>
                        <Image src="/img/20230107_173309.jpg" alt="Profile" width="28" height="28" />
                    </div>
                    <div className='pb-4 text-xs'>Theo Mashao</div>
                </div>
            </div>
        </div>
    )
}

export default Stories