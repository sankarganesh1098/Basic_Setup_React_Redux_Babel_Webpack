import React,{Component} from 'react'
import Action from './Action.js'


export default class Registration extends Component{

 constructor(props, context) {
    super(props, context)
 
    this.state = {
                id:this.props.id || "",
                name:this.props.name || "",
                age:this.props.age || "",
                email: this.props.email || "",
                phone:this.props.phone || ""
    };

    this.state.isEdit=false;
 }



clearState(e){
    this.setState(
           {    
                id:"",
                name:"",
                age:"",
                email:"",
                phone:"",
                isEdit:false
            }
    );
}


handleIdChange(e) {
    this.setState({ id: e.target.value });
}

handleNameChange(e) {
    this.setState({ name: e.target.value })
}
handleAgeChange(e) {
    this.setState({ age: e.target.value })
}
handlePhoneChange(e) {
    this.setState({ phone: e.target.value })
}
handleEmailChange(e) {
    this.setState({ email: e.target.value })
}



  render(){

    //   if(this.props.editUser!=={}){
    //       this.setState(this.props.editUser)
    //   }

    

     if(typeof(this.props.editUser)!=="undefined" && typeof(this.props.editUser.id)!=="undefined" && this.state.isEdit==false && this.props.editUser.id!==""){
         console.log("Inside If");
         this.state =this.props.editUser;
         this.state.isEdit=true;
     }
    

        

        return(
            <div>
            <div><h1>Registration Form</h1></div>
               
                    <div className="form-group">
                    <label>Id</label>
                        <input type="text" value={this.state.id} onChange={this.handleIdChange.bind(this)} className="form-control" id="id" placeholder="Id" />
                    </div>

                    <div className="form-group">
                    <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" value={this.state.age} onChange={this.handleAgeChange.bind(this)} className="form-control" id="age" placeholder="Age" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <Action actions={this.props.actions} user={this.state} clear={this.clearState.bind(this)} />
                    
            </div>
        );
    }
}


