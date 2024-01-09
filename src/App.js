import logo from './logo.svg';
import './App.css';


function App() {
  let person = {
    'name': 'Larry',
    'age' : 22
  }

  return (
    <div className="App">
      <Child person={person}/>
    </div>
  );
}

// ex 1
// export function Child({person}) {
//   return (
//   <div>
//     <h1>Hi {person.name} you are {person.age} old.</h1>
    

//   </div>
//   )
// }

// ex 2 using the obj name
export function Child({person:{name, age}}) {
  return (
  <div>
    <h1>Hi {name} you are {age} old.</h1>
    

  </div>
  )
}


export default App;
