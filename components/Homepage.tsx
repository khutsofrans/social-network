import React from 'react'
import Menu from './Menu'
import Right from './Right'
import Timeline from './Timeline'
import { useState } from 'react'
import { Post } from '../models/Post'

const Homepage: React.FC = () => {
    const [post, setPost] = useState<string>("");
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        if (post) {
            setPosts([...posts, { id: Date.now(), post }]);
            setPost("");
        }
    };

    return (
        <div className='bg-gray-800 w-full h-fit'>
            <div className='pt-12 flex justify-center w-full h-full text-white'>
                <Menu />
                <Timeline post={post} setPost={setPost} handleAdd={handleAdd} posts={posts} setPosts={setPosts} />
                <Right />
            </div>
        </div>
    )
}

export default Homepage