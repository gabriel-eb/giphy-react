import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/search'>Search</Link>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  );
}

export default App;
