// react is front end framwork, no refresh , loading is faster

import logo from './logo.svg';
import './App.css';
import './External.css';
import Home from './components/Home';
import ArroFunction from './components/ArroFunction';
import Variable from './components/Variable';
import ArrayMethods from './components/ArrayMethods';
import Test from './components/Test';
import Destructuring from './components/Destructuring';
import SpreadOperator from './components/SpreadOperator';
import Test2 from './components/Test2';
import Ternary from './components/Ternary';
import Props from './components/Props';
import Events from './components/Events';
import Conditionalrendering from './components/Conditionalrendering';
import Imp from './components/Imp';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import Usestate from './components/Usestate';
import Notfound from './components/Notfound';
import Useeffect from './components/Useeffect';
import Localstorages from './components/Localstorage';
import View from './components/View'
import Edit from './components/Edit';
import Employe from './components/Employe';
import Empedit from './components/Empedit';
import Localstemploy from './components/Localstemploy';
import Router from './components/Router';

function App() {
  // internal styling 
  const myStyle={
    color:"blue",
    backgroundColor: "black",

    heading:{
      color: "greenyellow",
      backgroundColor:"red",
    }
  }


// for Props component passing the variable
  var a="Lencita"
  var number=[10,20,40,50]
  

  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is abc
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* <h1 style={{color:"red", backgroundColor:"blue", marginTop:"100px"}}>Hello World</h1>
      <h2 style={myStyle}>Hello World</h2>
      <h3 style={myStyle.heading}>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6> */}

      {/* self closing */}
      {/* Function call */}

      {/* <Home/>
      <Variable/>
      <ArroFunction/>
      <ArrayMethods/>
      <Test/>
      <Destructuring/>
      <SpreadOperator/>
      <Test2/>
      <Ternary/>
      <Props value={a} item={number} age={6}/>
      {/* to pass integer use {} */}

      {/* <Events/>
      <Conditionalrendering/>
      <Imp/>
      <Test3/>
      <Test4/>
      <Usestate/> 
      <Notfound/>
      <Useeffect/>
      <Localstorage/>
      <View/>
      <Edit/>
      <Employee/>
      <Empedit/>
      <Localstemploy/>
      */} 

      <Router/>
      
      {/* close the tag of component here */}
      
    </div>
    
  );
  
}

export default App;
// export and import statements that will divide code . here importing exporting file not components
// create file Exp.js
// import it to the components Imp.js
