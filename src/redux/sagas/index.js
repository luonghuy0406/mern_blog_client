import {takeLatest} from 'redux-saga/effects'
import * as actions from '../actions'

function* fetchPostSaga(action){
//34:29
}

function* mySaga(){
    yield takeLatest(actions.getPosts.getPostsRequest,fetchPostSaga)
}

//generator function ES6

export default mySaga