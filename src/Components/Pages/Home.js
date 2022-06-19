import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import './Home.css'
const Home = () => {
    const [posts, setPost] = useState([])
    const [pageCount,setPageCount]=useState(0)
    console.log(pageCount)
    
    
    useEffect(() => {
        fetch(`https://backend.uviom.com/frontend_api/test-data`)
            .then(res => res.json())
            .then(data => {setPost(data.data)
            
                const count=data.data.length
                const pages=Math.ceil(count/2)
                console.log(count)
                setPageCount(pages)
            })
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
            <div className='pagination text-center my-5'>
            {
                [...Array(pageCount).keys()].map(number=><button className='px-2'>{number+1}</button>)
            }
            </div>
        </div>
    );
};

export default Home;