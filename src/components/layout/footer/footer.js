import React from 'react'
import * as styles from './footer.module.scss'

const Footer = props => {
    return (
        <div className={styles[`footer`]}>
            <p>&copy; Ritsu template</p>
        </div>
    )
}

export default Footer