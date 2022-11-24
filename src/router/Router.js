import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/Homepage';
import Details from '../components/Details';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/details" element={<Details />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;