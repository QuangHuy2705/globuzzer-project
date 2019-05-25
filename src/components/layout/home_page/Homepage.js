import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as styles from './homepage.scss'

class Homepage extends Component {
    render() {
        return (
            <div className={styles.home}>
                Home Page
            </div>
        )
    }
    
}

const mapStateToProps = state => ({

}) 

export default connect(mapStateToProps, null)(Homepage)