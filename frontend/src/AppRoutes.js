import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search/:searchTerm" element={<HomePage/>} />  {/*'search' is a constant term seen in the address bar. 'searchTerm' a wrote parameter that we can extract from the homePage and use to search*/}
    </Routes>
  )
}
