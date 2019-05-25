import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './navbar.module.scss'
import { Link } from 'react-router-dom'

class Navbar extends Component { 
    render() {
        return (
            <div className={styles.navbar}>
                <ul className={styles[`navbar-links`]}>
                    <li className={styles.link}><a href='/'>Home</a></li>
                    <li className={styles.link}><a href='/'>Pages</a></li>
                    <li className={styles.link}><a href='/'>Travel</a></li>
                    <li className={styles.link}><a href='/'>Lifestyle</a></li>
                    <li className={styles.link}><a href='/'>Featured</a></li>
                </ul>
                <ul className={styles[`navbar-social-links`]}>
                    <li className={`${styles[`social-link`]}`}>
                        <a href='/'>
                            <div className={`${styles[`link-icon`]} ${styles[`link-icon--facebook`]}`} />
                        </a>
                    </li>
                    <li className={`${styles[`social-link`]}`}>
                        <a href='/'>
                            <div className={`${styles[`link-icon`]} ${styles[`link-icon--twitter`]}`} />
                        </a>
                    </li>
                    <li className={`${styles[`social-link`]}`}>
                        <a href='/'>
                            <div className={`${styles[`link-icon`]} ${styles[`link-icon--instagram`]}`} />
                        </a>
                    </li>
                    <li className={`${styles[`social-link`]}`}>
                        <a href='/'>
                            <div className={`${styles[`link-icon`]} ${styles[`link-icon--google`]}`} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Navbar)