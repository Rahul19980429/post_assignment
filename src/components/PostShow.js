import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

const PostShow = () => {
    // use state for posts
    const [post, setPost] = useState([])
    // use state for spinner
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
       apiDataFetch();
    }, [])

    const apiDataFetch = async ()=>{
        let url = "https://dummyjson.com/posts"
        let data =await fetch(url);
        let posts =await data.json();
        setPost(posts.posts)
        setSpinner(false);
    }
    return (
        spinner===true?<Spinner/>:
        <div className='container'>
            <div className='row'>
               {/* {post.map()} */
              post.map((data)=>{
                return (
                <div className='col-lg-4 mb-4' key={data.id} >
                    <div className='border border-2 rounded-2 p-4'>
                 <h5>Title {data.id}: {data.title}</h5>
                    <p style={{textAlign:'justify'}}> <span className='fw-bold'>Body:</span> {data.body}</p>
                    
                   <hr className='mb-2'/>
                   <div className='d-flex'>
                    <small className='fw-bold'>Like: {data.reactions}</small>
                    <small className='mx-auto' ><span className='fw-bold'>Tag:</span> {data.tags.map((tagdata)=>{return tagdata+","})}</small>
                    </div>
                </div>
                </div>
                )
                })}
            </div>

        </div>
    )
}

export default PostShow
