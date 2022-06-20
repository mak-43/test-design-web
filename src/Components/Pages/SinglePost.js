import moment from 'moment';
import { duration } from 'moment';
import React from 'react';



const SinglePost = ({ post }) => {
    const { created_at, post_details, liked_posts_count, comments_count } = post
    const { first_name, last_name, username } = post.user
    const { content_name } = post.post_contents[0]
    const { friend_profile_photo } = post.profile_images

    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    // const year=created_at.split('T')[0]



    // console.log( 'T3',t3)
    // const d1=new Date(date)
    // const d2=new Date(year)
    // const di=Math.abs(d1-d2)

    // // const mnt=moment().minute(t1,moment.ISO_8601)
    // // console.log(typeof t1)
    // // const days=diff/(1000 * 3600 * 24) 
    // // const dd=String(days)
    // // const day=dd.split('.')[0]
    // // const min=dd.split('.')[1]

    // function dif(){
    //     var a=moment('2021-08-22 13:31:12')
    //     var b=moment()
    //     dif=moment.preciseDiff(a,b,true)
    //     document.getElementById('output').innerHTML=JSON.stringify(dif)
    // }

    const t1 = created_at.split('.')[0]
    const t2 = t1.split('T')[0]
    const t3 = t2 + ' ' + t1.split('T')[1]
    function toTimestamp(strDate) {
        var datum = Date.parse(strDate);
        return datum / 1000;
    }

    const strt = toTimestamp(t3)
    const now = toTimestamp(dateTime)
    console.log(strt, now)
    console.log('t3', dateTime, t3)

    var ndat=new Date().getTime()
    var dat = new Date(created_at);
    var seconds = dat.getTime()  
    var newdat=ndat-seconds
    console.log('sec',seconds,ndat,newdat)

    const state = { startDate: seconds, timeEnd: ndat } // example

    const startDate = moment(state.startDate);
    const timeEnd = moment(state.timeEnd);
    const diff = timeEnd.diff(startDate);
    const diffDuration = moment.duration(diff);

    console.log("Total Duration in millis:", diffDuration.asMilliseconds());
    console.log("Days:", diffDuration.days());
    console.log("Hours:", diffDuration.hours());
    console.log("Minutes:", diffDuration.minutes());
    console.log("Seconds:", diffDuration.seconds());


    return (
        <div className='bg-base-200  rounded my-5'>
            <div class="card w-full  ">
                <div class="card-body ">
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-between items-center'>
                            <div class="avatar">
                                <div class="w-10 rounded-full ring ring-primary ">
                                    <img src={`https://uviom-life.s3.amazonaws.com/images/personal/friend_profile_photo/` + friend_profile_photo} alt="" />
                                </div>
                            </div>

                            <div className='ml-5'>
                                <h2 class="card-title">{first_name + " " + last_name}</h2>
                                <small id='output'>
                                    {/* {
                                // day?`${day}d `:`min>60? ${min/60}h: ${min}s'`
                                 day<0?`${day}d   ago`: `${(min/60).toFixed(2)} hr ago` 
                                
                                } */}
                                    {/* {
                                        diffDuration.days()+'d'+diffDuration.hours()+'hr'+diffDuration.minutes()+'min ago' 
                                    } */}
                                {
                                    diffDuration.days()? diffDuration.days()+'d ago':diffDuration.hours()?diffDuration.hours() +'hr ago':diffDuration.minutes()?diffDuration.minutes()+'min ago':diffDuration.seconds()+'sec ago'
                                }

                                </small>
                            </div>
                        </div>
                        <div>
                            <i class="fa-solid fa-ellipsis m-5"></i>
                        </div>
                    </div>
                    <div >
                        <img className='rounded' src={`https://uviom-life.s3.amazonaws.com/images/content/post_images/` + content_name} alt="" />

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