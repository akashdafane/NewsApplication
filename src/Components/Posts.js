import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';


const Posts = () => {
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