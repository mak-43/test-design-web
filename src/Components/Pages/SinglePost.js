import React from 'react';

const SinglePost = ({ post }) => {
    const { created_at, post_details, liked_posts_count, comments_count } = post
    const { first_name, last_name, username } = post.user
    const { content_name } = post.post_contents
    const { friend_profile_photo } = post.profile_images

    return (
        <div className='bg-base-200  rounded'>
            <div class="card w-full  m-5">
                <div class="card-body ">
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div class="avatar">
                                <div class="w-10 rounded-full ring ring-primary  ">
                                    <img src={`https://uviom-life.s3.amazonaws.com/images/personal/friend_profile_photo/` + friend_profile_photo} alt="" />
                                </div>
                            </div>

                            <div className='ml-5'>
                                <h2 class="card-title">{first_name + " " + last_name}</h2>
                                <small>{created_at}</small>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-ellipsis m-5"></i>
                        </div>
                    </div>
                    <div>
                        <img src={`https://uviom-life.s3.amazonaws.com/images/personal/friend_profile_photo/`+ content_name} alt="" />

                    </div>
                    <p>{post_details}</p>
                    <div className='flex  items-center justify-center gap-5 '>
                        <p className='bg-base-100 rounded-full p-2 w-1 flex justify-center items-center gap-2 flex-wrap'><i class="fa-solid fa-thumbs-up"></i> {liked_posts_count} Like</p>
                        <p className='bg-base-100 rounded-full p-2 w-1 flex justify-center items-center gap-2 flex-wrap'><i class="fa-solid fa-comments"></i> {comments_count} Comment</p>
                        <p className='bg-base-100 rounded-full p-2 w-1 flex justify-center items-center gap-2 flex-wrap'> <i class="fa-solid fa-share-from-square"></i>Share</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SinglePost;