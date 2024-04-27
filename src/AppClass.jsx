import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here

  render(){
    const getimg = this.imageData();
    return(
      <>
      <h1>KALVIUM GALLERY</h1>
      <div className="app">
        {getimg.map((ele)=>{
          return <img key={ele.id} src={ele.img}  alt={ele.id} />
        })}
      </div>
      </>
    )
  }
}
