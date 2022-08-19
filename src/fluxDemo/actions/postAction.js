import dispatcher from "../appDispatcher";
import actionType from "./actionType";
import data from '../fluxDB.json'

export function getPosts(){

     dispatcher.dispatch(
         {
             actionType: actionType.GET_POSTS,
             posts: data['posts']
         }
     )
}
