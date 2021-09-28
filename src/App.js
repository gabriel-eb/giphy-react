import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { Route, Link, Switch } from 'react-router-dom';
import "./gifs.css"

function App() {
  return (
    <div className="App">
      <Link className="Link" to='/'>Home</Link>
      <Link className="Link" to='/search'>Search</Link>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
