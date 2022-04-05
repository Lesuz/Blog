import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react';

import Homepage from './pages/Homepage'
import Articles from './pages/Articles'
import Othernews from './pages/Othernews'
import About from './pages/About'
import Article from './pages/Article'
import SignIn from './pages/SignIn'
import EditArticles from './pages/EditArticles';
import EditNews from './pages/EditNews';
import NewArticle from './pages/NewArticle'
import NewNews from './pages/NewNews'
import EditArticle from './pages/EditArticle'
import EditNewsArticle from './pages/EditNewsArticle';

function App() {

    const [token, setToken] = useState()

    // return all possible routes the frontend has
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/othernews" component={Othernews} />
                    <Route path="/about" component={About} />
                    <Route path="/article/:id" component={Article} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/editarticles" component={EditArticles} />
                    <Route path="/editnews" component={EditNews} />
                    <Route path="/newarticle" component={NewArticle} />
                    <Route path="/newnews" component={NewNews} />
                    <Route path="/editarticle/:id" component={EditArticle} />
                    <Route path="/editnews/:id" component={EditNewsArticle} />
                    <Route path="/*" component={Homepage} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
