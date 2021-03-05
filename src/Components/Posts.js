import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';


const Posts = (props) => {
    // useEffect(()=>{
    //     props.fetchPosts();
    // })  
    // const PostsData = useState(state => state.posts.items)
    // console.log("postdata",PostsData)
    return(
        <div>
            <h1>From posts</h1>
        </div>
    )
}

// mapStare

export default connect (null,{fetchPosts})(Posts)