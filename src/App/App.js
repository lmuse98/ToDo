import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import ToDo from "../Todo/ToDo";
import db from "../firebase";
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);

  const [input, setInput] = useState("");

  const addTodo = event => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    
    setInput("");
   
  };

  return (
    <div className="App">
      <h1>Hello</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          AddTodo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <ToDo todo={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
