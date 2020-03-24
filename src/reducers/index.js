import {combineReducers} from 'redux'

import user from './userReducer'
import encounters from './encountersReducer'

export default combineReducers({
    user,
    encounters
})