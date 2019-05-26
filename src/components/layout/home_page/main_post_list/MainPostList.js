import React, {Component} from 'react'
import * as styles from './mainpostlist.module.scss'
import Post from './Post'

class MainPostList extends Component {

    render() {
        return (
            <div className={styles[`main-post-list`]}>
                <div className={styles[`hero-post`]}>
                    <Post hero={true} />
                </div>

                <div className={styles[`sub-posts`]}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        )
    }
}

export default MainPostList
