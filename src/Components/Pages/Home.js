import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

const Home = () => {
    const [posts, setPost] = useState([])
    useEffect(() => {
        fetch(`https://backend.uviom.com/frontend_api/test-data`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    }, [])
    return (
        <div>
            Total Post : {posts.length}
            <div className='bg-base-100'>
                {
                    posts.map(p =><SinglePost
                    key={p.id}
                    post={p}
                    ></SinglePost>)
                }


            </div>
        </div>
    );
};

export default Home;