import axios from "axios";
import { useState } from 'react'
import Card from "../component/Card";

export default function Home() {
  const [num , setUser] = useState('')
  const [datas_api , setData] = useState([]);
  const genUsers = async () => {
    const resp = await axios.get(`https://randomuser.me/api/`);
    if( num > 0 ){
      resp = await axios.get(`https://randomuser.me/api/?results=${num}`)
      setData(resp.data.results)
    }else{
      alert("invalid number of user")
    }
  };

 

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setUser(event.target.value)
          }}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {/* Example of folded UserCard */}
          
      {datas_api.map((person) => <Card pic={person.picture.medium} name = {person.name.first + ' ' + person.name.last} email = {person.email} 
        locate = {person.location}/>)}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Pearl Kurokami 640612094
      </p>
    </div>
  );
}
