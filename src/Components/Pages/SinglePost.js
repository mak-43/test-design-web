import React from 'react';

const SinglePost = ({post}) => {
    const {first_name,last_name,username}=post.user
    const {friend_profile_photo}=post.profile_images

    return (
        <div className='bg-base-200 mx-10 rounded'>
                 <div class="card w-full  m-5">
                    <div class="card-body ">
                        <h2 class="card-title">{first_name +" "+last_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions ">
                           hello
                        </div>

                    </div>
                </div>
        </div>
    );
};

export default SinglePost;