import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
import Breakpoint from 'react-socks'
import { withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

class Navbar extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            isNavbarShown: false
        }
    }

    toggleNavbar = e => {
        this.setState({isNavbarShown: !this.state.isNavbarShown})
    }

    render() {
        const {history: {location: { pathname }}} = this.props
        return (
            <div className={styles.navbar}>
                <Breakpoint medium up>
                    <ul className={styles[`navbar-links`]}>
                        <li className={pathname === '/' ? `${styles.link} ${styles[`link--active`]}` : `${styles[`link`]}`}><Link to='/'>Home</Link></li>
                        <li className={styles.link}><Link to='/'>Pages</Link></li>
                        <li className={styles.link}><Link to='/'>Travel</Link></li>
                        <li className={styles.link}><Link to='/'>Lifestyle</Link></li>
                        <li className={pathname === '/posts/create' ? `${styles.link} ${styles[`link--active`]}` : `${styles[`link`]}`}><Link to='/posts/create'>New Post</Link></li>
                    </ul>
                </Breakpoint>

                <Breakpoint small down>
                    <div onClick={e => this.toggleNavbar(e)} className={`${styles[`icon`]} ${styles[`icon--menu`]}`}></div>
                </Breakpoint>
                <CSSTransition
                    in={this.state.isNavbarShown}
                    unmountOnExit={true}
                    classNames={{
                        appear: styles[`slide-appear`],
                        appearActive: styles[`slide-appear-active`],
                        enter: styles[`slide-enter`],
                        enterActive: styles[`slide-enter-active`],
                        enterDone: styles[`slide-enter-done`],
                        exit: styles[`slide-exit`],
                        exitActive: styles[`slide-exit-active`]
                    }}
                    timeout={200}
                >
                    <ul className={styles[`navbar-links--mobile`]}>
                        <li className={styles.link}><Link to='/'>Home</Link></li>
                        <li className={styles.link}><Link to='/'>Pages</Link></li>
                        <li className={styles.link}><Link to='/'>Travel</Link></li>
                        <li className={styles.link}><Link to='/'>Lifestyle</Link></li>
                        <li className={styles.link}><Link to='/posts/create'>New Post</Link></li>
                    </ul>
                </CSSTransition>

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

export default withRouter(connect(mapStateToProps, null)(Navbar))