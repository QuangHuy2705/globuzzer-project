import React from 'react'
import * as styles from './sidebar.module.scss'
import image_placeholder from '../../../../commons/images/image_placeholder.png'
import insta1 from '../../../../commons/images/insta-1.jpg'
import insta2 from '../../../../commons/images/insta-2.jpg'
import insta3 from '../../../../commons/images/insta-3.jpg'
import insta4 from '../../../../commons/images/insta-4.jpg'
import insta5 from '../../../../commons/images/insta-5.jpg'
import insta6 from '../../../../commons/images/insta-6.jpg'
import insta7 from '../../../../commons/images/insta-7.jpg'
import insta8 from '../../../../commons/images/insta-8.jpg'

const Sidebar = ({posts, authors}) => {
    const popularPosts = posts.filter((post, idx) => idx < 3)

    const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8]

    return (
        <div className={styles.sidebar}>

            <div className={styles[`section-user-info`]}>
                <div className={styles[`side-section-title`]}>
                    <h3>About me</h3>
                </div>
                <img src={authors[0].image_url ? authors[0].image_url : image_placeholder} alt='ava' className={styles[`user-image`]} />
                <p> 
                    <span style={{color: '#e67272b9'}} >{authors[0].name}: </span>
                    {authors[0].description}
                </p>
            </div>

            <div className={styles[`section-subscribe`]}>
                <div className={styles[`side-section-title`]}>
                    <h3>Follow & subscribe</h3>
                </div>
                <input placeholder='Enter you email: ' className={styles[`subscribe-input`]} type='text'></input>
                <a href='/' className={`${styles[`btn`]} ${styles[`btn--subscribe`]}`}>subscribe</a>
            </div>

            <div className={styles[`section-popular-posts`]}>
                <div className={styles[`side-section-title`]}>
                    <h3>Popular Posts</h3>
                </div>
                <div className={styles[`popular-posts`]}>
                    {popularPosts.length > 0 && popularPosts.map((post, idx) => (
                        <div key={idx} className={styles[`post`]}>
                            <img className={styles[`post-image`]} src={post.image_url} alt='a' />
                            <div className={styles[`post-text`]}>
                                <a href='/' className={styles[`post-title`]}>{post.title}</a>
                                <p className={styles[`post-date`]}>
                                    March 21, 2018
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles[`section-instagram`]}>
                <div className={styles[`side-section-title`]}>
                    <h3>Instagram</h3>
                </div>

                <div className={styles[`insta-images`]}>
                    {instaImages.map((image, idx) => {
                        return (
                            <a key={idx} href='/' className={styles[`image-wrapper`]}>
                                <div className={styles[`image-hover`]}>
                                    <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                                </div>
                                <img className={styles[`insta-image`]} src={image} alt={`insta${idx}`}></img>
                            </a>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar