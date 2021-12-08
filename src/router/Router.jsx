import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { MainPage } from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
