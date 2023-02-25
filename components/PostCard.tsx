import React from 'react'
import Image from 'next/image'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import EditAttributesOutlinedIcon from '@mui/icons-material/EditAttributesOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Post } from '../models/Post'

type Props = {
    post: Post;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const PostCard = ({ post, posts, setPosts }: Props) => {
    return (
        <div>
            <div className='w-full h-auto mb-3 rounded-[13px] bg-gray-900'>
                <div className='w-full h-full px-4 py-3 flex justify-between items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]  cursor-pointer'>
                            <Image src="/img/Snapchat-1175385830.jpg" alt="Profile" width="28" height="28" />
                        </div>
                        <div className='px-4 flex flex-col text-white cursor-pointer'>
                            <div className='text-sm font-bold'>Amani Silas</div>
                            <div className='text-[gray] text-xs '>South Africa, 26 minutes ago</div>
                        </div>
                    </div>
                    <MoreHorizOutlinedIcon className='text-xl cursor-pointer' />
                </div>
                {/* <div className='w-full h-full px-4 mb-4 flex justify-center items-center overflow-hidden'>
                    <Image src="/img/d305977e0cddf7800a05c8c62eded1a4.jpg" alt="Profile" width="558" height="1116" className='rounded-[13px]' />
                </div> */}
                <div className='w-full h-full px-4 mb-4 flex justify-start items-center text-white'>
                    <span className='text-sm'>{post.post}</span>
                </div>
                <div className='w-full h-full px-6 flex justify-between items-center'>
                    <div className='w-[170px] flex justify-between items-center'>
                        <div className='flex justify-start items-center'>
                            <FavoriteBorderOutlinedIcon className='text-xl cursor-pointer' />
                            <span className='px-[4px] text-sm'>35</span>
                        </div>
                        <div className='flex justify-start items-center'>
                            <CommentOutlinedIcon className='text-xl cursor-pointer' />
                            <span className='px-[4px] text-sm'>4</span>
                        </div>
                        <ShareOutlinedIcon className='text-xl cursor-pointer' />
                    </div>
                    <BookmarkBorderOutlinedIcon className='text-xl cursor-pointer' />
                </div>
                <div className='w-full h-full px-4 py-3 text-sm text-[gray] flex justify-start items-center cursor-pointer'>
                    <span>View all</span>
                    <span className='px-[4px]'>4</span>
                    <span>comments</span>
                </div>
            </div>
        </div>
    )
}

export default PostCard