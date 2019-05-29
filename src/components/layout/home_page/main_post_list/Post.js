import React from 'react'
import * as styles from './mainpostlist.module.scss'
import image_placeholder from '../../../../commons/images/image_placeholder.png'

const Post = ({hero, post}) => (
    <div className={styles[`post`]}>
        <img src={post.image_url ? post.image_url : image_placeholder} className={styles[`post-image`]} alt='post_image'/>
        <div className={styles[`post-text`]}>
            <div className={styles[`post-text-status`]}>
                <a className={styles[`post-text-status-category`]} href='/' >{post.category ? post.category : 'Unknown'}</a>
                <div className={styles[`post-text-status-likes`]}>
                    <div className={`${styles[`icon`]} ${styles[`icon--heart`]}`} /> {post.like_num ? post.like_num : 0}     
                </div>
                <div className={styles[`post-text-status-comments`]}>
                    <div className={`${styles[`icon`]} ${styles[`icon--comment`]}`}/> {post.comment_num ? post.comment_num : 0}       
                </div>
            </div>
            <a href='a' className={styles[`post-text-title`]}>{post.title}</a>
            <p className={styles[`post-text-date`]}>March 22, 2018</p>
            {hero && (
                <p className={styles[`post-text-discription`]}>{post.description}</p>
            )} 
            <a href='/' className={styles[`btn`]} >Read more</a>
        </div>

    </div>
)

export default Post