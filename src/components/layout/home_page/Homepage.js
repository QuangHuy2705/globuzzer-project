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
 
class Homepage extends Component {
    render() {
        return (
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

                <div className={styles[`main-content`]}>
                    <MainPostList />
                    <Sidebar />
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state => ({

}) 

export default connect(mapStateToProps, null)(Homepage)