import React from 'react'
import Stories from './Stories'
import Image from 'next/image'
import Feed from './Feed'
import Posts from './Posts';
import { Post } from '../models/Post';

interface Props {
    post: string;
    setPost: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const Timeline = ({ post, setPost, handleAdd, posts, setPosts }: Props) => {
    return (
        <div className='mt-11 pl-[240px]'>
            <div className='w-[590px] px-[11px]'>
                <div>
                    <Stories />
                </div>
                <div className='w-full h-14 mb-3 rounded-[13px] bg-gray-900'>
                    <form className='w-full h-full flex justify-center items-center' onSubmit={(e) => handleAdd(e)}>
                        <div className='w-7 h-7 flex justify-center items-center rounded-full overflow-hidden aspect-[1/1]  cursor-pointer'>
                            <Image src="/img/Snapchat-1175385830.jpg" alt="Profile" width="28" height="28" />
                        </div>
                        <input className='w-[445px] h-11 pl-4 rounded-full outline-none border-none text-white bg-gray-900 text-sm' type="search" placeholder="What's on your mind?" name="post" value={post} onChange={(e) => setPost(e.target.value)} />
                        <button className='h-9 w-[65px] px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 border-none rounded-full flex items-center text-sm' type='submit'>Post</button>
                    </form>
                </div>
                <div>
                    <Posts posts={posts} setPosts={setPosts} />
                </div>
            </div>
        </div>
    )
}

export default Timeline