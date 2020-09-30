import React,{useReducer} from 'react';

import './App.css';
import DataFechingone from './UseReducer/DataFechingone';
import DataFechingtwo from './UseReducer/DataFechingtwo';
// import ComponentA from './UseReducer/ComponentA';
// import ComponentB from './UseReducer/ComponentB';
// import ComponentC from './UseReducer/ComponentC';
// import Counterone from './UseReducer/Counterone';
// import Countertwo from './UseReducer/Countetwo';
// import CompC from './UseContextApi/CompC';
// import DataFechingByme from './components/DataFechingByme';
// import DataFetching from './components/DataFetching';
// import MouseContainer from './components/MouseContainer';
// import HookMouse from './components/HookMouse';
// import ClassMouse from './components/ClassMouse';
// import HookCounterOne from './components/HookCounterOne';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter from './components/HookCounter';
// import Counter from './components/Counter';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (state,action)=> {
//     switch(action){
//         case 'increment':
//             return state +1
//         case 'decrement':
//             return state -1
//         case 'reset': 
//             return initialState
//         default:
//             return state
//     }
// }

function App() {

  // const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      {/* <h2> Count - {count} </h2> */}

      {/* <Counter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <DataFetching /> */}
      {/* <DataFechingByme /> */}
      {/* <UserContext.Provider value={'Madan Rijal'}>
          <ChannelContext.Provider value={'Code Evulution'}>
          <CompC />
          </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counterone /> */}
      {/* <Countertwo /> */}

      {/* <CountContext.Provider value= {{countState:count,countDispatch:dispatch}}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFechingone /> */}
      <DataFechingtwo />
      
    </div>
  );
}

export default App;
