import './App.css';
import Wrapper from './Wrapper/Wrapper';
import Logo from './Logo';
import { Routes, Route } from "react-router-dom";
import ToDoRequest from "./ToDoRequest/ToDoList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Logo />} />
          <Route path='/todolist' element={<Wrapper />} />
        </Routes>
        <ToDoRequest />
      </header>
    </div>
  );
}

export default App;
