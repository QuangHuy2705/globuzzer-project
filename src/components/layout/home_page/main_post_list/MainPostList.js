import React from 'react'
import * as styles from './mainpostlist.module.scss'
import Post from './Post'
import Loading from '../../../../commons/loading_component/LoadingComponent'

const MainPostList = ({posts}) => {

    return (
        
        <div className={styles[`main-post-list`]}>
            <div className={styles[`hero-post`]}>
                <Post post={posts[0]} hero={true} />
            </div>

            <div className={styles[`sub-posts`]}>
                {posts.map((post, idx) => {
                    return (
                        <Post key={idx} post={post}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MainPostList
