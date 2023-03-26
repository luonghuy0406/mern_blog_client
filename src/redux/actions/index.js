import {createActions} from 'redux-actions'

export const getPosts = createActions({
    getPostsRequest : undefined,
    getPostsSuccess : (payload)=>{return payload},
    getPostsError : (err)=>{return err}
})