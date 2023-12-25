// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes >
      </BrowserRouter >
    </div>

  );
}

export default App;
