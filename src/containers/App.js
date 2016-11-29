import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Registration from '../components/Registration'
import Grid from '../components/Grid'
import * as UsersActions from '../actions'

class App extends Component{

  componentDidMount() {
        let {actions} = this.props;
        //actions.loadAllTodos(); // Network..
  }   

    render(){
        
        console.log("this.props app",this.props);

        const { users, actions,editUser } = this.props;

        return(
            <div className="container">
                <Registration actions={actions} editUser={editUser} />
                <Grid actions={actions} users={users} editUser={editUser}/>
            </div>
            );
    }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    editUser:state.editUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UsersActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

