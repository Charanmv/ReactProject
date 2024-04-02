import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom'
import CssStyle from './Components/CssStyle/CssStyle';
import FunctionalComp from './Components/FunctionalComp';
import ClassComp from './Components/ClassComp';
import Binding from './Components/Binding';
import State from './Components/State';
import LifecycleMethods from './Components/LifecycleMethods';
import PropsFunc1 from './Components/Props/PropsFunc1';
import Axios from './Components/Axios';
import UseState from './Components/UseState/UseState';
import Array from './Components/UseState/Array';
import Object from './Components/UseState/Object';
import Parent from './Components/Default/Parent';
import ParentProps from './Components/PropsType/ParentProps';
import UseEffect from './Components/UseEffect/UseEffect';
import ReactFragmentComp from './Components/ReactFragmentComp';
import PrevState from './Components/UseState/PrevState';
import PrevStateClass from './Components/UseState/PrevStateClass';
import Bind from './Components/Bind';
import Conditional from './Components/UseEffect/Conditional';
import FetchingData from './Components/UseEffect/FetchingData';
import Id from './Components/UseEffect/Id';
import UseContext1 from './Components/Context/Context1';
import UseContext2 from './Components/Context/Context2';
import PureComp from './Components/PureComp/PureComp';
import MainComp from './Components/PureComp/MainComp';
import ParentCompCallback from './Components/UseCallback/ParentComp';
import DiffParent from './Components/UseMemoCallback/DiffParent';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';
import Batching from './Components/Batching';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My React App</h1>
      <h5>Routing of react app implemented here - npm install react-router-dom</h5>
      <h5>On click of below link it will take to respective module</h5>

      <NavLink to='/binding'>Binding</NavLink><br></br>
      <NavLink to='/funcComp'>Functional Component</NavLink><br></br>
      <NavLink to='/classComp'>Class Component</NavLink><br></br>
      <NavLink to='/state'>State in class Component</NavLink><br></br>
      <NavLink to="/bind">Explicitly Bind</NavLink><br></br>
      <NavLink to='/style'>CSS Style</NavLink><br></br>
      <NavLink to='/lifecycle'>Lifecycle Method</NavLink><br></br>
      <NavLink to='/props'>Props</NavLink><br></br>
      <NavLink to='/axios'>Axios</NavLink><br></br>
      <NavLink to="/defaultprops">Default Props</NavLink><br></br>
      <NavLink to="/propstype">Props Type</NavLink><br></br>
      <NavLink to="/reactfragment">React Fragment</NavLink><br></br>
      <NavLink to="/usestate">UseState</NavLink><br></br>
      <NavLink to="/prevstate">Prev state use state</NavLink><br></br>
      <NavLink to="/prevstateclass">Prev state class use state</NavLink><br></br>
      <NavLink to="/array">UseState with Array</NavLink><br></br>
      <NavLink to="/object">UseState with Object</NavLink><br></br>
      <NavLink to="/useeffect">UseEffect</NavLink><br></br>
      <NavLink to="/conditional">Conditional UseEffect</NavLink><br></br>
      <NavLink to="/fetchingdata">Fetching Data UseEffect</NavLink><br></br>
      <NavLink to="/id">Fetching Data in UseEffect based on Id</NavLink><br></br>
      <NavLink to="/usecontext1">Use Context</NavLink><br></br>
      <NavLink to="/usecontext2">Use Context Provider</NavLink><br></br>
      <NavLink to="/purecomp">Pure Component</NavLink><br></br>
      <NavLink to="/useCallback">Use Callback</NavLink><br></br>
      <NavLink to="/useCallbackanduseMemo">useCallbackanduseMemo</NavLink><br></br>
      <NavLink to="/useMemo">Use Memo</NavLink><br></br>
      <NavLink to="/useref">Use Ref</NavLink><br></br>
      <NavLink to="/batching">React batching</NavLink><br></br>
    </div>
    <Routes>
      <Route path='/style' element={<CssStyle></CssStyle>}></Route>
      <Route path='/funcComp' element={<FunctionalComp></FunctionalComp>}></Route>
      <Route path='/classComp' element={<ClassComp></ClassComp>}></Route>
      <Route path='/binding' element={<Binding></Binding>}></Route>
      <Route path='/state' element={<State></State>}></Route>
      <Route path='/lifecycle' element={<LifecycleMethods></LifecycleMethods>}></Route>
      <Route path='/props' element={<PropsFunc1></PropsFunc1>}></Route>
      <Route path='/axios' element={<Axios></Axios>}></Route>
      <Route path='/usestate' element={<UseState></UseState>}></Route>
      <Route path='/array' element={<Array></Array>}></Route>
      <Route path='/object' element={<Object></Object>}></Route>
      <Route path='/defaultprops' element={<Parent></Parent>}></Route>
      <Route path='/propstype' element={<ParentProps></ParentProps>}></Route>
      <Route path='/useeffect' element={<UseEffect></UseEffect>}></Route>
      <Route path='/reactfragment' element={<ReactFragmentComp></ReactFragmentComp>}></Route>
      <Route path='/prevstate' element={<PrevState></PrevState>}></Route>
      <Route path='/prevstateclass' element={<PrevStateClass></PrevStateClass>}></Route>
      <Route path='/bind' element={<Bind></Bind>}></Route>
      <Route path='/conditional' element={<Conditional></Conditional>}></Route>
      <Route path='/fetchingdata' element={<FetchingData></FetchingData>}></Route>
      <Route path='/id' element={<Id></Id>}></Route>
      <Route path='/usecontext1' element={<UseContext1></UseContext1>}></Route>
      <Route path='/usecontext2' element={<UseContext2></UseContext2>}></Route>
      <Route path='/purecomp' element={<MainComp></MainComp>}></Route>
      <Route path='/useCallback' element={<ParentCompCallback></ParentCompCallback>}></Route>
      <Route path='/useCallbackanduseMemo' element={<DiffParent></DiffParent>}></Route>
      <Route path='/useMemo' element={<UseMemo></UseMemo>}></Route>
      <Route path='/useRef' element={<UseRef></UseRef>}></Route>
      <Route path='/batching' element={<Batching></Batching>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
