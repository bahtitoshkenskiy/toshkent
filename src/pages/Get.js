import React, { Component } from 'react'
import './Get.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios'



export default class Get extends Component {
state={
  date:[],
  date2:[],
  date3:[],
  date4:[],
  date5:[],
  date6:[],
  date7:[],
  date8:[],
}
componentDidMount(){
axios.get("https://api.baracar.uz/api/calltouser/").then(res=>{
  this.setState({date:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/models/").then(res=>{
  this.setState({date2:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/series/").then(res=>{
  this.setState({date3:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/position/").then(res=>{
  this.setState({date4:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/fuel_sort/").then(res=>{
  this.setState({date5:res.data})
}).catch(err=>{
  alert("ishlamadi")
})

axios.get("https://api.baracar.uz/api/gear_box/").then(res=>{
  this.setState({date6:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/garant/").then(res=>{
  this.setState({date7:res.data})
}).catch(err=>{
  alert("ishlamadi")
})
axios.get("https://api.baracar.uz/api/cars/").then(res=>{
  this.setState({date8:res.data})
}).catch(err=>{
  alert("ishlamadi")
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
        <select name="" id="">
{this.state.date2.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date3.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date4.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date5.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date6.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date7.map(item=>{
return <option value="1">{item.name_uz}</option>
})}</select>
        <select name="" id="">
{this.state.date8.map(item=>{
return  <Table responsive="sm">
<thead>
  <tr>
    <th>"id":</th>
    <th>{item.id}</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>"name_uz":</th>
    <th>{item.name_uz}</th>

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
})}</select>






      </div>
      
    )
  }
}













