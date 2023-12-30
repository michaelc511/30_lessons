import NavBar from './Navbar';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const person = { name: 'Yoshi', age: 30 }
  const link = 'http://www.google.com'
  return (
    <Router>
      <div className='App'>
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>           
            {/* 2. Path to blog id */}
            <Route path="/blog/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
