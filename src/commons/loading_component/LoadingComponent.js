import React from 'react'
import loader from '../images/loader.gif'

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translateX(-50%)'
}

const Loader = props => (
    <img style={style} src={loader} alt='loader' />
)

export default Loader