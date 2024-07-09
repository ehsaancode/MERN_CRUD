import './App.css';
import AllPosts from './Components/AllPosts';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Nav from "./Components/nav"

import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path ="/create" element={<Create/>} />
        <Route path ="/" element={<AllPosts/>} />
        <Route path ="/:id" element={<Edit/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
