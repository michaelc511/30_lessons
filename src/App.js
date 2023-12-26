import NavBar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50
  const person = { name: 'Yoshi', age: 30 }
  const link = 'http://www.google.com'
  return (
    <div className='App'>
      <NavBar></NavBar>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
