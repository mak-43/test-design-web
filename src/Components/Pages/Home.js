import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';

const Home = () => {
    const [posts, setPost] = useState([])
    const [pageCount,setPageCount]=useState(0)

    const pages=Math.ceil(posts.length/2)
  
    useEffect(() => {
        fetch(`https://backend.uviom.com/frontend_api/test-data`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    }, [])
    return (
        <div className='lg:px-20  lg:w-2/3 mx-auto'>
            Total Posts : {posts.length}
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