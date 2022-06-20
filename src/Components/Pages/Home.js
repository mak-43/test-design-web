import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import { Link } from "react-router-dom";
import './Home.css'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const Home = () => {
   
    const [pageCount, setPageCount] = useState(0)
    const[posts,setPost]=useState([])
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(1)
    const [post, setPst] = useState([])

    


   
    // useEffect(() => {
    //     fetch(`https://backend.uviom.com/frontend_api/test-data`)
    //         .then(res => res.json())
    //         .then(data => {

    //             setPost(data.data)

    //             const count = data.data.length
    //             const pages = Math.ceil(count / size)

    //             setPageCount(pages)
    //         })
    // }, [])


      const { data:data, isLoading, error, refetch } = useQuery('posts', () => fetch(`https://backend.uviom.com/frontend_api/test-data`).then(res => res.json()))
       
      
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='lg:px-20  lg:w-2/3 mx-auto sm:w-full '>
            Total Posts : {data.data.length}
            
          
            <div className='bg-base-100 my-5'>
                {
                    data.data.map(p =><SinglePost
                    key={p.id}
                    post={p}
                    ></SinglePost>)
                }

                


            </div>
            <div className='pagination text-center my-5'>
                {
                    [...Array(data.data.length).keys()].map(number => <button
                        onClick={() => setPage(number + 1)}
                        className={page == number + 1 ? 'selected px-2' : 'px-2'}
                    >{number + 1}</button>)
                }

                {/* <select onChange={e=>setSize(e.target.value)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> */}

            </div>
        </div>
    );
};

export default Home;