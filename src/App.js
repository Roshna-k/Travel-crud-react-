import './App.css';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
     <Nav/>   
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
