import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Articles from './pages/Articles'
import Othernews from './pages/Othernews'
import About from './pages/About'
import Article from './pages/Article';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/articles" component={Articles} />
                    <Route path="/othernews" component={Othernews} />
                    <Route path="/about" component={About} />
                    <Route path="/article" component={Article} />
                    <Route path="/*" component={Homepage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
