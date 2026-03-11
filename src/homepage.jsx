import Nav from "./nav";
import './index.css';
import App from './App.jsx';
import Card from "./Card";
import Comment from "./comment";

function Home() {
    return(
        <>
        <Nav /> 
        <Card name="Apples" description="This is apple!"/>
        <Card name="Banana" description="BANANANANANA!"/>
        <Card name="grapes" description="This is grapes!"/>
        <App />
        <Comment />
        </>
    );
}

export default Home