import logo from './logo.svg';
import './App.css';


function App() {
  let numbers = [1,2,3]
  return (
    <div className="App">
      <Child name="Mike" numbers={numbers}/>
    </div>
  );
}

export function Child({name, numbers}) {
  return (
  <div>
    <h1>Hi {name}</h1>
    {/* loop through the numbers using map */}
    {numbers.map((num) =>{
      return(
        <div key={num}>{num}</div>
      );
    })}

  </div>
  )
}


export default App;
