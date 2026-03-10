import { useState } from "react";
import "./comment.js"

function Comment({message}){
    const [Comment, setComment] = useState('');
    const commentchange = (event) => setComment(event.target.value)
    return(
    <div>
    <input type="text" placeholder="enter your idea about this page!" value={Comment }onChange={commentchange}></input>
    <button id="button">Click here to upload</button>
    <p id="para" hidden>Thank you!</p>
    <ul><li>{Comment}</li></ul>    
    </div>)
};
export default Comment;

