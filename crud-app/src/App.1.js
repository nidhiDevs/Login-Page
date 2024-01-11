import { BrowserRouter, Routes } from 'react-router-dom';
import Login_Ragistration from ' ./components_1/Login_Ragistration';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Login_Ragistration />
        {/* <Route exact path='/' element={<Create />}></Route>
            <Route exact path='/read' element={<Read />}></Route>
            <Route exact path='/update' element={<Update/>}></Route>
            <Route exact path='/demo' element={<Demo/>}></Route>     */}
      </Routes>
    </BrowserRouter>
  );
}
