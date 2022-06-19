import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import './Home.css'
const Home = () => {
    const [posts, setPost] = useState([])
    const [pageCount,setPageCount]=useState(0)
   const [page,setPage]=useState(0)
    const [size,setSize]=useState(1)
    
    useEffect(() => {
        fetch(`https://backend.uviom.com/frontend_api/test-data`)
            .then(res => res.json())
            .then(data => {setPost(data.data)
            
                const count=data.data.length
                const pages=Math.ceil(count/size)
                console.log(count)
                setPageCount(pages)
            })
    }, [page,size])
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
                [...Array(pageCount).keys()].map(number=><button 
                    onClick={()=>setPage(number+1)}
                    className={ page==number+1 ? 'selected px-2':'px-2'}
                    >{number+1}</button>)
            }
            
            <select onChange={e=>setSize(e.target.value)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            
            </div>
        </div>
    );
};

export default Home;