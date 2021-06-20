import React, { Component, forwardRef } from "react";
import "./App.css";
import axios from "axios";
import {Route,BrowserRouter,Link,Redirect } from 'react-router-dom';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      dob: "",
      phn: "",
      errorName:"",
      errorEmail:"",
      errorDob:"",
      errorPhn:"",
      redirect: ""
    };
  }

  validate = ()=>{
     // console.log("date of birth", this.state.dob.slice(0,4))
      let count= 0;
      if (this.state.name.includes("@")|| this.state.name.length===0){
          this.setState({errorName:"Error: Invalid Name"})
          count+=1
      }
      if (!this.state.email.includes("@")|| !this.state.email.includes(".")||this.state.email.length===0){
        this.setState({errorEmail:"Error: Invalid Email"})
        count+=1
    }
    if (this.state.dob.length===0 || !(parseInt(this.state.dob.slice(0,4))<2003) ){
        this.setState({errorDob:"Error : Invalid Date of birth (User must be 18+)"})
        count+=1
    }
    if (!this.state.phn.length===10 ){
        this.setState({errorPhn:"Error: Invalid Phone Number"})
        count+=1
    }
    if (count===0){
        return true
    }
    else{
        alert("Your Input form has some errors!")
        return false
    }
       
  }

  forward=() => {
      alert("red")
      return <Redirect to='/users'  />
  }

 submit=()=>{
     if(this.validate()){

        const  data = {name:this.state.name, email:this.state.email, dob:this.state.dob, phn:this.state.phn}
        console.log(data)
        axios.post("https://parkzapbackend.herokuapp.com/api/users",data).then((res)=>  this.props.history.push('/users') )
        .catch((error)=> alert(error))
     }
     else{
     }

 }



  render() {
    return (
      <div className=" mb-3">
        <h2>User Detail Form</h2>

        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-control"  placeholder="Enter Name"
          onChange={(e) => this.setState({name:e.target.value})}
        ></input>
        <p>{this.state.errorName}</p>

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" placeholder="Enter Email"
          onChange={(e) => this.setState({email:e.target.value})}
        ></input>
        <p> {this.state.errorEmail}</p>

        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input type="date"  max="2003-1-1" min="1990-1-1" className="form-control"
          onChange={(e) => this.setState({dob:e.target.value})}
        ></input>
        <p> {this.state.errorDob}</p>


        <label htmlFor="phn" className="form-label">
          Phone Number
        </label>
        <input type="text" className="form-control" placeholder="Enter phone Number"
          onChange={(e) => this.setState({phn:e.target.value})}
        ></input>
        <p>{this.state.errorPhn}</p>

        <button className="btn btn-primary" onClick = {this.submit}>Submit</button>
    
      </div>
    );
  }
}

export default Form;
