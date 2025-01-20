

import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './auth/loginPage';
import { RegisterPages } from './auth/registerPages';







export const App = () => {
  return (
    <Routes>
      <Route path='/auth/login' element={<LoginPage/>}/>
      <Route path='/auth/register/' element={<RegisterPages/>}/>   
    </Routes>
  )
}

