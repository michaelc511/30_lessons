const Home = () => {

  const handleClick0 = () => {
    console.log('hello ninjas');
  }


  const handleClick = (e) => {
    console.log('hello ninjas', e);
  }

  // pass an argument. 
  const handleClickAgain1 = (name) => {
    console.log('hello ' + name );
  }


  // pass an argument. 
  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  // pass an argument w event in 1st arg
  const handleClickAgain2 = (e, name) => {
    console.log('hello ' + name, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>

      {/* Passing in a reference to the function 
          Do not run it with functionName()
          
          Event 'e' is optional if no parameters

          For passing in an argument, need to wrap it in an
          anonymous function
      */}

      <button onClick={handleClick0}>Click m0</button>
      <button onClick={handleClick}>Click me w event</button>
      <button onClick={(e) => handleClickAgain1('mario')}>Click me w no event arg</button>

      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again w event arg</button>
      <button onClick={(e) => handleClickAgain2(e, 'mario')}>Click me again w event arg</button>

    </div>
  );
}

export default Home;