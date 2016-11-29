import {ADD_USER,EDIT_USER,UPDATE_USER,DELETE_USER} from '../constants/ActionTypes';

const initialState = {
        users:[],
        editUser:{}
}

export default function registration(state=initialState,action){

    switch(action.type){
    case ADD_USER:
            return {
             users:[
               action.user, 
                ...state.users
             ],
            editUser:{}
            }
     case UPDATE_USER:

     

     return {
            editUser:{},
            users:state.users.map(user =>user.id === action.user.id ?Object.assign({}, user, 
                        {
                        name:action.user.name,age:action.user.age,phone:action.user.phone,email:action.user.email,isEdit:false
                        })
                        :user
                        )
            } 

     

    case DELETE_USER:
            return {
                    editUser:{},
                    users:state.users.filter(user=>user.id!==action.id)
                   };
    case EDIT_USER:
              return {
             users:[
                ...state.users
             ],
            editUser:action.user
            };

    default:
            return state;

    }

}