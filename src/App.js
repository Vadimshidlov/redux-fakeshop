import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductsListing";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={ProductListing}/>
                    <Route path="/product/:productId" exact component={ProductDetail}/>
                    <Route>404 not found!</Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
