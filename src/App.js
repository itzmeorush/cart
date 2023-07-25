import './styles/app.scss';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Cart from './component/Cart'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;
