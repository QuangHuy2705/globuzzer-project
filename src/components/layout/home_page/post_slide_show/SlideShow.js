import React, {Component} from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import * as styles from './slideshow.module.scss'
import { Carousel } from 'react-responsive-carousel'

class SlideShow extends Component {
    render() {
        const slideItems = this.props.posts.map((post, idx) => {
            return (
                <div key={idx} className={styles[`slide-item`]}>
                    <img src={post.image_url} alt='slide-item' />
                    <div className={styles[`slide-text`]}>
                        <div className={styles[`slide-text-status`]}>
                            <a className={styles[`slide-text-status-category`]} href='/' >{post.category}</a>
                            <div className={styles[`slide-text-status-likes`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--heart`]}`} /> {post.like_num || 0}    
                            </div>
                            <div className={styles[`slide-text-status-comments`]}>
                                <div className={`${styles[`icon`]} ${styles[`icon--comment`]}`}/> {post.comment_num || 0}      
                            </div>
                        </div>
                        <a href='a' className={styles[`slide-text-title`]}>{post.title}</a>
                        <p className={styles[`slide-text-date`]}>March 22, 2018</p>
                        <a href='/' className={styles[`btn`]} >Read more</a>
                    </div>
            </div>
            )
        })

        return (
            <Carousel 
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                transitionTime={300}
            >
                {slideItems}
            </Carousel> 
        )
    }
}

export default SlideShow