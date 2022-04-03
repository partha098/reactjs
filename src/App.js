import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './inc/Menu';
function App() {
  return (
    <>
<BrowserRouter>
<Menu/>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
</Routes>
</BrowserRouter>
    


   </>
  );
}

export default App;
