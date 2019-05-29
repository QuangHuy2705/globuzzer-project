import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './home_page.module.scss'
import mainlogo from '../../../commons/images/main_logo.png'
import categorytravel from '../../../commons/images/category-travel.jpg'
import categorylifestyle from '../../../commons/images/category-lifestyle.jpg'
import categoryrecipe from '../../../commons/images/category-recipe.jpg'
import categoryfashion from '../../../commons/images/category-fashion.jpg'
import categoryhealth from '../../../commons/images/category-health.jpg'
import {Link} from 'react-router-dom'
import Sidebar from './side_bar/Sidebar'
import MainPostList from './main_post_list/MainPostList'
import SlideShow from './post_slide_show/SlideShow'
import Loading from '../../../commons/loading_component/LoadingComponent'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
 
class Homepage extends Component {

    
    render() {
        const slideshowPosts = this.props.posts ? this.props.posts.filter((post, idx) => post.slideShow ) : []
        return (!this.props.posts || !this.props.authors || this.props.posts.length === 0 || this.props.authors.length === 0) ? <Loading /> : ( 
            <div className={styles.homepage}>
                <div className={styles[`main-logo`]}>
                    <img src={mainlogo} alt='main-logo'/>
                </div>

                <div className={styles.slideshow}></div>

                <div className={styles.categories}>
                    <div className={styles[`categories-item`]}>
                        <img src={categorytravel} alt=''/>
                        <Link to='/'>travel</Link>
                    </div>
                    <div className={styles[`categories-item`]}>
                        <img src={categorylifestyle} alt=''/>
                        <Link to='/'>lifestyle</Link>
                    </div>
                    <div className={styles[`categories-item`]}>
                        <img src={categoryrecipe} alt=''/>
                        <Link to='/'>recipe</Link>
                    </div>
                    <div className={styles[`categories-item`]}>
                        <img src={categoryfashion} alt=''/>
                        <Link to='/'>fashion</Link>
                    </div>
                    <div className={styles[`categories-item`]}>
                        <img src={categoryhealth} alt=''/>
                        <Link to='/'>health</Link>
                    </div>
                </div>

                <div className={styles[`slideshow`]}>
                    <SlideShow posts={slideshowPosts} />
                </div>

                <div className={styles[`main-content`]}>
                    {(!this.props.authors || !this.props.posts) 
                        ? <Loading /> 
                        : ( <React.Fragment>
                                <MainPostList posts={this.props.posts} />
                                <Sidebar authors={this.props.authors} posts={this.props.posts} />
                            </React.Fragment>   
                    )} 
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        posts: state.firestore.ordered.posts,
        authors: state.firestore.ordered.authors
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'posts'},
        {collection: 'authors'}
    ])
)(Homepage)