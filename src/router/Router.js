import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/Homepage';
import Details from '../components/Details';

import { AppContainer } from '../style';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/details" element={<Details />}>
          </Route>
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
};

export default AppRouter;