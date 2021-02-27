import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import './ToDo.css'
import db from '../firebase';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function ToDo(props) {

  return (
    <List className = "todo_list" >
      <ListItem>
        <ListItemText primary ="Todo" secondary ={props.todo.todo} />
      </ListItem>
      <button onClick = {event => db.collection('todos').doc(props.todo.id).delete()}><HighlightOffIcon /></button>
      

      
    </List>
  );
}

export default ToDo;
