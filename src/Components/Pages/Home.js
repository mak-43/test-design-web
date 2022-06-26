import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';
import { Link } from "react-router-dom";
import './Home.css'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
const Home = () => {


    const [posts, setPost] = useState()
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(1)


 
    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`https://backend.uviom.com/frontend_api/test-data`)
            setPost(res.data)
            setLoading(false)
        }
        fetchPosts()

        //  setLoading(true)
        // fetch(`https://backend.uviom.com/frontend_api/test-data`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setPost(data)
        //          setLoading(false)
        //     })
    }, [])


    //   const { data:data, isLoading, error, refetch } = useQuery('posts', () => fetch(`https://backend.uviom.com/frontend_api/test-data`).then(res => res.json()))


    if (loading) {
        return <Loading />
    }


    const iLastPost = currentPage * postsPerPage;
    const iFirstPost = iLastPost - postsPerPage
    const currentPosts = posts?.data?.slice(iFirstPost, iLastPost)
    console.log(currentPosts)
    return (
        <div className='lg:px-20  lg:w-2/3 mx-auto sm:w-full  '>
            Total Posts : {posts?.data.length}


            <div className='bg-base-100 my-5'>
                {

                    currentPosts?.map(p => <SinglePost
                        key={p.id}
                        post={p}
                        loading={loading}
                        postsPerPage={postsPerPage}
                        totalPosts={posts?.data.length}
                    ></SinglePost>)

                }

                

            </div>
            <div className='pagination text-center my-5'>
                {
                    [...Array(posts?.data?.length).keys()].map(number => <button
                        onClick={() => setCurrentPage(number+1 )}
                        className={currentPage == number+1  ? 'selected px-2 rounded' : 'px-2 rounded'}
                    >{number +1}</button>)
                }

                <select className='ms-2  ' onChange={e => setPostsPerPage(e.target.value)}>
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                 
                </select>

            </div>
        </div>
    );
};

export default Home;