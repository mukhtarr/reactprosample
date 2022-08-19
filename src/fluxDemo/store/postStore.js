import {EventEmitter} from 'events'
import dispatcher from "../appDispatcher";
import actionType from "../actions/actionType";


const CHANGE_EVENT = 'change'
let myPostData = []

class PostStore extends EventEmitter{
       addChangeListener(callback){
           this.on(CHANGE_EVENT,callback)
       }

       emitChange(){
           this.emit(CHANGE_EVENT)
       }

       getPosts(){
           return myPostData
       }
}

const store = new PostStore()
/*
action = {
             actionType: actionType.GET_POSTS,
             posts: data['posts']
         }
*/
dispatcher.register((action)=>{
      switch(action.actionType){
            case actionType.GET_POSTS:
               myPostData=action.posts
               store.emitChange()
               break
      }
})

export default store
