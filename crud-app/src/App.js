import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Demo from './components/Demo';
// import Login from './components1/Login';
import LoginRegistration from './components1/LoginRegistration.';
function App() {
  return (
    <div>
       {/* <Login/> */}
       <LoginRegistration/> 

    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Login/>
    //     {/* <LoginRegistration/> */}
    //      {/* <Route exact path='/' element={<Create />}></Route>
    //      <Route exact path='/read' element={<Read />}></Route>
    //      <Route exact path='/update' element={<Update/>}></Route>    
    //      <Route exact path='/demo' element={<Demo/>}></Route>     */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
