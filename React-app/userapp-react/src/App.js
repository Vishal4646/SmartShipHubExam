import axios from 'axios';
import React, {useEffect,useState} from 'react';

function App() {

// const handleData = (e) => {
//     setInput({...input, [e.target.name]:e.target.value})
// }

let TextChanged = (event) => {
  var copyofInput = { ...input };
  copyofInput[event.target.name] = event.target.value;
  setInput(copyofInput);
};
const [input, setInput] = useState({
  name: "",
  email: "",
  password: "",
});

useEffect(()=>{

  setInput({
    name: "",
    email: "",
    password: ""
  })



},[])

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4003/router/storeuserinfo',input).then((res)=>{
        console.log(res)
        })
        
    }

  return (
    <>
    <h1>User App</h1>
    <form>
    <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input  class="form-control" id="name" placeholder="Name" onChange={TextChanged}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={TextChanged}/>  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" onChange={TextChanged}/>
  </div>
  
  
  <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
</form>
    </>
  );
}

export default App;
