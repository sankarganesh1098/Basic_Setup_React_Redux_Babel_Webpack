import React,{Component,PropTypes } from 'react'

class Action extends Component{
    render(){
        console.log("Edit Button",this.props.user);
            return(
                <div>
                <button onClick={()=>{
                    if(this.props.user.isEdit===true){
                        this.props.actions.updateUser(this.props.user);
                    }
                    else{
                        this.props.actions.addUser(this.props.user);
                    }
                    
                    this.props.clear()
                }
            } className="btn btn-default">{this.props.user.isEdit===true?'UPDATE':'Submit'}</button>
                </div>
            );
    }
}


// Action.propTypes = {
//   addUser: PropTypes.user.isRequired,
// }

export default Action;