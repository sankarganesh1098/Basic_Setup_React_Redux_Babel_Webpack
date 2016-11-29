import * as types from '../constants/ActionTypes'


export function addUser(user){
    return { type:types.ADD_USER,user }
}

export function editUser(user){
    return { type:types.EDIT_USER,user }
}

export function updateUser(user){
    return { type:types.UPDATE_USER,user }
}

export function deleteUser(id){
       return { type:types.DELETE_USER,id }
}
