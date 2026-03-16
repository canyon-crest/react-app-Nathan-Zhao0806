import Nav from "./nav";
import './index.css';
import App3 from './App.jsx';
import Card from "./Card";

function Home() {
    return(
        <>
        <Card name="Apples" description="This is apple!"/>
        <Card name="Banana" description="BANANANANANA!"/>
        <Card name="grapes" description="This is grapes!"/>
        <App3 />
        <footer><p>
        &copy; 2026 Nathan website</p></footer>
        </>
    );
}

export default Home