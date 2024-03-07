// import logo from './logo.svg';
import "./App.css";
import { app, database } from "./Config";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function App() {

  const [data, setData] = useState({});
  const myCollection = collection(database, 'users');

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  };

  const handleSubmit = (event) => {
    addDoc(myCollection, { email: data.email, password: data.password })
      .then((response) => console.log("New user added successfully"))
      .catch((error) => console.log("Error: " + error.message));
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
