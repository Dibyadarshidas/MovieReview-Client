import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";
//Page and Layout imports
import Homepage from './pages/Homepage'; 
import Category from './pages/Category'; 
import Reviewpage from './pages/Reviewpage'; 
import Header from './components/Header';

//Apollo Client
const client = new ApolloClient({
    uri : "http://localhost:1337/graphql",
    cache: new InMemoryCache()
})

const App = () => {
    return ( <>
    <Router>
    <ApolloProvider client={client} >
    <div className="App">
    <Header/>
        <Switch>
            <Route exact path="/" >
                <Homepage/>
            </Route>
            <Route path="/category" >
                <Category/>
            </Route>
            <Route path="/review-page/:id" >
                <Reviewpage/>
            </Route>
        </Switch>
    </div>
    </ApolloProvider>
    </Router>
    </> );
}

export default App;