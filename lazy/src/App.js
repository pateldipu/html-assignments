import './App.css';
import React,{Suspense,lazy} from 'react';
// import About from './component/About';
// import Home from './component/Home';
const Home = lazy(()=>import('./component/Home'))
const About = lazy(()=>import('./component/About'))



function App() {
  return (
    <>
     <div className='text-center mt-5'>
            <Home/>
            <Suspense fallback = {<div>LOADING......</div>}>
              <About/>
              
            </Suspense>
      </div>
    </>
  );
}

export default App;