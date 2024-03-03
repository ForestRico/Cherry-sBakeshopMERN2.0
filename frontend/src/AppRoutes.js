import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Home/Food/FoodPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search/:searchTerm" element={<HomePage/>} />  {/*'search' is a constant term seen in the address bar. 'searchTerm' a wrote parameter that we can extract from the homePage and use to search*/}
      <Route path="/tag/:tag" element={<HomePage/>} /> 
      <Route path="/food/:id" element={<FoodPage/>} />    
    </Routes>
  )
}
