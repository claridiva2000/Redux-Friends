import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// Link
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    
      <div className="App">
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        </Router>
      </div>
    
  );
}

export default App;
