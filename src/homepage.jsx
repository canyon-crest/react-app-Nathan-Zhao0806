import Nav from "./nav";
import './index.css';
import App from './App.jsx';
import Card from "./Card";
import Comment from "./comment.jsx";

function Home() {
    return(
        <>
        <Card name="Apples" description="This is apple!"/>
        <Card name="Banana" description="BANANANANANA!"/>
        <Card name="grapes" description="This is grapes!"/>
        <App />
        <Comment />
        <footer><p>
        &copy; 2026 Nathan website</p></footer>
        </>
    );
}

export default Home