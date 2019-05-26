import React, {Component} from 'react'
import * as styles from './mainpostlist.module.scss'

const Post = ({hero}) => (
    <div className={styles[`post`]}>
        <img src='http://www.perfektart.com/Online/Ritsu/images/big-post1.jpg' className={styles[`post-image`]} alt='whatever'/>
        <div className={styles[`post-text`]}>
            <div className={styles[`post-text-status`]}>
                <a className={styles[`post-text-status-category`]} href='/' >Travel</a>
                <p className={styles[`post-text-status-likes`]}>
                    <div className={`${styles[`icon`]} ${styles[`icon--heart`]}`} /> 10     
                </p>
                <p className={styles[`post-text-status-comments`]}>
                    <div className={`${styles[`icon`]} ${styles[`icon--comment`]}`}/> 15       
                </p>
            </div>
            <a href='a' className={styles[`post-text-title`]}>Enjoy Beautiful Beach</a>
            <p className={styles[`post-text-date`]}>March 22, 2018</p>
            {hero && (
                <p className={styles[`post-text-discription`]}>Fusce non odio dui. In hac habitasse platea dictumst. Aliquam erat volutpat maecenas est risus aliquet eget ligula vel, condimentum semper ccumsan ipsum ac enim porttitor ac venenatis.</p>
            )} 
            <a href='/' className={styles[`btn`]} >Read more</a>
        </div>

    </div>
)

export default Post