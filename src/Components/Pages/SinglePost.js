import React from 'react';

const SinglePost = ({post}) => {
    const {created_at,post_details,liked_posts_count,comments_count}=post
    const {first_name,last_name,username}=post.user
    const {content_name}=post.post_contents
    const {friend_profile_photo}=post.profile_images

    return (
        <div className='bg-base-200 mx-10 rounded'>
                 <div class="card w-full  m-5">
                    <div class="card-body ">
                        <img src={friend_profile_photo} alt="" />
                        <h2 class="card-title">{first_name +" "+last_name}</h2>
                        <small>{created_at}</small>
                        <div>
                            <img src={content_name} alt="" />
                            
                        </div>
                        <p>{post_details}</p>
                        <div className='flex  items-center gap-5 '>
                            <p className='bg-base-100 rounded-full p-3  flex justify-center items-center gap-2 flex-wrap'><i class="fa-solid fa-thumbs-up"></i> {liked_posts_count} Like</p>
                            <p className='bg-base-100 rounded-full p-3  flex justify-center items-center gap-2'><i class="fa-solid fa-comments"></i> {comments_count} Comment</p>
                            <p className='bg-base-100 rounded-full p-3  flex justify-center items-center gap-2'> <i class="fa-solid fa-share-from-square"></i>Share</p>
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default SinglePost;