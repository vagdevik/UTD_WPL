// react
import React,{useState} from "react";


export default function NewVideos() {
// react Hook For State Handler
  const [data , setData]=useState(null)

// Fetch Function   
  fetch("./data.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <div>
      {
        // use data State Variable For Get Data Use JavaScript Map Mathod
       data? data.map(
          function(data){
                  return (<div className="card"> 
                  <h4> {data.username}</h4>
                  <h2> {data.firstName}  {data.lastName}</h2>
                  <h3> {data.gender}</h3>
                  <h3> {data.aboutAuthor}</h3>
              </div>)
          }
        ):""
      }
    </div>
  );
}
