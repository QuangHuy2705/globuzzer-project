import { CREATE_POST } from '../actionTypes'

export const createPost = post => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('posts').add({
            ...post
        }).then(newPost => {
            console.log(newPost)
            dispatch({
                type: CREATE_POST,
                post
            })
        }).catch(e => {
            console.log(e)
        })
    }
}