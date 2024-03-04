// import logo from './logo.svg';
import "./App.css";
import { app } from "./console";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

function App() {
  const auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };
  const handleSubmit = (event) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="App">
      <input
        name="email"
        type="email"
        placeholder="Email address"
        onChange={(event) => handleInput(event)}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={(event) => handleInput(event)}
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default App;
