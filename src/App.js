import NavBar from './Navbar';
import Home from './Home';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
            <Route path="/blog/:id">
              <BlogDetails/>
            </Route>
            {/* 2. A path at the end with '*' for NotFound */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
