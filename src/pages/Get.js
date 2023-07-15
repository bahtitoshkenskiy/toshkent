import React, { Component } from 'react'
import './Get.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios'



export default class Get extends Component {
state={
  date:[]
}



componentDidMount(){
axios.get("https://api.baracar.uz/api/calltouser/").then(res=>{
  this.setState({date:res.data})
}).catch(err=>{
  alert("ss")
})
}



  render() {
    return (
      <div>

<h1>+</h1>
<div className="card1">
  <h1>x</h1>
  <input placeholder='Fullname' className='inp' type="text" />
  <input placeholder='Email' className='inp' type="text" />
  <input placeholder='Phone number' className='inp' type="text" />
  <input placeholder='Message' className='inp' type="text" />
<button className='bt'>Post</button>
</div>

        {this.state.date.map(item=>{
return(
  <Table responsive="sm">
  <thead>
    <tr>
      <th>"id":</th>
      <th>{item.id}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>"fullname":</th>
      <th>{item.fullname}</th>

    </tr>
    <tr>
      <th>"email":</th>
      <th>{item.email}</th>

    </tr>
    <tr>
      <td>
      <th>"phone_number": </th>
      <th>{item.phone_number}</th></td>

    </tr>
    <tr>
      <th>"message":</th>
      <th>{item.message}</th>

    </tr>
  </tbody>
</Table>
)
        })}

      </div>
    )
  }
}













