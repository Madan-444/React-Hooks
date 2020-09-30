import React, {Component} from 'react';
import './App.css';
import PostForm from './components/PostForm';
// import PostList from './components/PostList';
// import ComponentC from './components/ComponentC'
// import {UserProvider} from './components/UserContext'
// import FragmentsDemo from './components/FragmentsDemo';
// import Form from './components/Form';

// import StyleSheet from './components/StyleSheet'
// import NameList from './components/NameList';
// import UserGreeting from './components/UserGreeting';
// import ParentComp from './components/ParentComp';
// import EventBind from './components/EventBind';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';


function App() {
  
  return (
    <div className="App">
      {/* <h2>King is back</h2> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComp /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary =  {true} /> */}
      {/* <Form /> */}
      {/* <FragmentsDemo /> */}
      {/* <UserProvider value = 'Madan Rijal' >
                <ComponentC />
          </UserProvider> */}

      {/* <PostList /> */}
      <PostForm />
      
    </div>
  );
}
// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        name:'madan Rijal'
//     }
//   }
  
//   render() {
//       return (
//            <div className='App' >
//              <UserProvider value = {this.state.name} >
//                 <ComponentC />
//           </UserProvider>
//            </div>
          
          
//       )
//   }
// }

export default App;
