// import logo from './logo.svg';
// import './App.css';
// import FunctionComponent,{firstname,lastname} from "./components/FunctionComponent"
// import ClassComponent from "./components/ClassComponent"

// function App() {
//   const text = 'Hello World';
  
//   return (
//     <div className="App">
//       <p> {text} </p>
//       <FunctionComponent fname={firstname} lname={lastname}/>
//       <ClassComponent />
//     </div>
//   );
// }

// export default App;


// import {lastName, getFirstName, FunctionalComponent}  from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  // const firstName = getFirstName();
  return (
    <div className="App">
     Hello
     {/* <FunctionalComponent fname={firstName} lname={lastName}/> */}
     {/* <ClassComponent fname={firstName} lname={lastName}/> */}
     <ClassComponent />
    </div>
  );
}

export default App;