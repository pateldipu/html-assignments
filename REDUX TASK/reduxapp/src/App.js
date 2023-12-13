import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreateUser from './CreateUser';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<CreateUser />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

// json-server --watch __filename.json --port 8000
