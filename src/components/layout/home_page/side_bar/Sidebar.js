import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as styles from './sidebar.module.scss'

class Sidebar extends Component {

    render() {
        return (
            <div className={styles.sidebar}>

                <div className={styles[`section-user-info`]}>
                    <div className={styles[`side-section-title`]}>
                        <h3>About me</h3>
                    </div>
                    <img src='http://www.perfektart.com/Online/Ritsu/images/about-img.png' alt='ava' className={styles[`user-image`]} />
                    <p>
                        Rein Tsu nullam mollis ex magna, tristique lobortis turpis accumsan in lorem ipsum dolor sit amet
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
                    <div className={styles[`post`]}>
                        <img className={styles[`post-image`]} src='http://www.perfektart.com/Online/Ritsu/images/sm-post1.jpg' alt='a' />
                        <div className={styles[`post-text`]}>
                            <a href='/' className={styles[`post-title`]}>The Fabulous Island</a>
                            <p className={styles[`post-date`]}>
                                March 21, 2018
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles[`section-instagram`]}>
                   <div className={styles[`side-section-title`]}>
                        <h3>Instagram</h3>
                    </div>

                    <div className={styles[`insta-images`]}>
                        <a href='/' className={styles[`image-wrapper`]}>
                            <div className={styles[`image-hover`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                            </div>
                            <img className={styles[`insta-image`]} src='http://www.perfektart.com/Online/Ritsu/images/insta5.jpg' alt='a'></img>
                        </a>

                        <a href='/' className={styles[`image-wrapper`]}>
                            <div className={styles[`image-hover`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                            </div>
                            <img className={styles[`insta-image`]} src='http://www.perfektart.com/Online/Ritsu/images/insta5.jpg' alt='a'></img>
                        </a>

                        <a href='/' className={styles[`image-wrapper`]}>
                            <div className={styles[`image-hover`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                            </div>
                            <img className={styles[`insta-image`]} src='http://www.perfektart.com/Online/Ritsu/images/insta5.jpg' alt='a'></img>
                        </a>

                        <a href='/' className={styles[`image-wrapper`]}>
                            <div className={styles[`image-hover`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                            </div>
                            <img className={styles[`insta-image`]} src='http://www.perfektart.com/Online/Ritsu/images/insta5.jpg' alt='a'></img>
                        </a>
                        <a href='/' className={styles[`image-wrapper`]}>
                            <div className={styles[`image-hover`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--search`]}`} />
                            </div>
                            <img className={styles[`insta-image`]} src='http://www.perfektart.com/Online/Ritsu/images/insta5.jpg' alt='a'></img>
                        </a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Sidebar