import { useState } from "react";

function Comment({message}){
    const [Comment, setComment] = useState('');
    const commentchange = (event) => setComment(event.target.value)
    return(
    <div>
    <input type="text" placeholder="enter your idea about this page!" value={Comment }onChange={commentchange}></input>
    <ul><li>{Comment}</li></ul>    
    </div>)
};
export default Comment;

