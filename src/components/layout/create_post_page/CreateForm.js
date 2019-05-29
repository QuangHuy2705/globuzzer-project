import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import postActions from '../../../store/actions/index'
import * as styles from './create_form.module.scss'

class CreateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            category: '',
            description: '',
            image_url: '',
            content: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onHandleSubmit = e => {
        e.preventDefault()
        this.props.createPost({ ...this.state })
        this.props.history.push('/')
    }

    render() {
        console.log(this.props.history)
        return (
            <div className={styles[`create-form`]} >
                <h3 className={styles[`form-title`]}>
                    Create a new post
                </h3>
                <form className={styles[`form`]} onSubmit={(e) => this.onHandleSubmit(e)}>
                    <div className={styles[`form-item`]}>
                        <input placeholder='Title' id='title' name='title' value={this.state.title} onChange={e => this.handleChange(e)} type='text'  className={styles[`form-input`]} />
                    </div>
                    <div className={styles[`form-item`]}>
                        <input placeholder='Description' id='description' name='description' value={this.state.description} onChange={e => this.handleChange(e)} type='text'  className={styles[`form-input`]} />
                    </div>

                    <div className={styles[`form-item`]}>
                        <input placeholder='Category' id='category' name='category' value={this.state.category} onChange={e => this.handleChange(e)} type='text'  className={styles[`form-input`]} />
                    </div>

                    <div className={styles[`form-item`]}>
                        <input placeholder='Image Url' id='image_url' name='image_url' value={this.state.image_url} onChange={e => this.handleChange(e)} type='text'  className={styles[`form-input`]} />
                    </div>
                    
                    <div className={styles[`form-item`]}>
                        <textarea rows={5} placeholder='Content' id='content' name='content' value={this.state.content} onChange={e => this.handleChange(e)} type='text'  className={styles[`form-input`]} />
                    </div>
                    <button className={styles[`form-button`]} type='submit' >Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createPost: postActions.createPost
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateForm)