import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './auth/loginPage';
import { RegisterPages } from './auth/registerPages';
import LayoutLadingPage from './layouts/LayoutLadingPage';
import Home from './views/Home/Home';
import { ContraSenaPage } from './auth/ContraSenaPage';



export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutLadingPage/>} >
      <Route index element={<Home/>}/>
      </Route>
      <Route path='/auth/contrasena' element={<ContraSenaPage/>}/>
      <Route path='/auth/login' element={<LoginPage/>}/>
      <Route path='/auth/register/' element={<RegisterPages/>}/>   
    </Routes>
  )
}

