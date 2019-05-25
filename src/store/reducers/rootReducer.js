import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    dummy: (test) => ({dummy: 'test'})
})

export default rootReducer