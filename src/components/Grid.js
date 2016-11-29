import React,{Component} from 'react'


export default class Grid extends Component{


    render(){

        return(
            <div>
            <table className="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
                <tbody>
                 {this.props.users.map((user,index) =>
                     <tr key={index}>
                     <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td><button onClick={()=>this.props.actions.editUser(user)} className="btn btn-default">Edit</button></td>
                        <td><button onClick={()=>this.props.actions.deleteUser(user.id)} className="btn btn-default">Delete</button></td>
                    </tr>
                 )}
                </tbody>
            </table>

            </div>
        )
    }
}