import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './navbar.scss'

class Navbar extends Component { 
    render() {
        return (
            <div className={styles.navbar}>
                Navbar
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