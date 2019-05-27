import { CREATE_POST } from '../actionTypes'

const initState = {
    posts: [],
}

const postReducer = (state = initState, action) => {
    
    switch (action.type) {
        case CREATE_POST:
            console.log(`POST CREATED!`) 
            return state
        default: 
            return state
    }
}

export default postReducer