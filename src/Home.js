import { useState } from 'react';

const Home = () => {

  let firstName = 'mario';
  // Does not change 'firstName' in web template but in console.log
  // React is not reactive 'name' to rerender it on the web
  const handleClick = () => {
    firstName = 'luigi'
    console.log(firstName);
  }

  // Need to use hook 'useState' to have React track it
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(25);

  const handleClick1 = () => {
    setName('luigi');
    setAge(30);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old </p>
      <button onClick={handleClick}>Click me will not work</button>
      <p>       
        <button onClick={handleClick1}>Click me will work using 'useState' hook</button>
      </p>


    </div>
  );
}

export default Home;