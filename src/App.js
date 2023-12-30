import NavBar from './Navbar';
import Home from './Home';
// 1 import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const person = { name: 'Yoshi', age: 30 }
  const link = 'http://www.google.com'
  return (
    // 2 add the Router to contain everything
    <Router>
      <div className='App'>
        <NavBar></NavBar>
        <div className="content">
          // 3 add the switch
          <Switch>
            // 4 add the route to home page
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
