import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import movie from './movie';


const reducer = combineReducers({
    movie
})

export default configureStore({
    reducer
})