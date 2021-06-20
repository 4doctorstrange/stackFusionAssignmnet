import "./App.css";
import React, { Component } from "react";
import axios from "axios";
class APP extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    axios.get("https://parkzapbackend.herokuapp.com/api/users").then((res) => {
      const data = res.data;
  
      this.setState({
        items: data
      })
    });
  }

  

  

  render() {
    const data = this.state.items
    const display = data.map((item)=>
    {
      return (
        <div>
        <div key = {item.id}>
          <p>Id: {item.id}</p>
          <p>Name : {item.name}</p>
          <p>Email : {item.email}</p>
          <p>Date of Birth : {item.dob}</p>
          <p>Phone Number : {item.phn}</p>
        </div>
        <br/>
        <hr/>
        </div>
      )
    }
    )
    return (
      <div>
        <div className="App" ><h2>Form Data</h2>
        {display}
        </div>
      </div>
    );
  }
}

export default APP;
