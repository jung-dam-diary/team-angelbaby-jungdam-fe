import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { MainPage, DiaryPage, DiaryCreatePage } from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diary/new" element={<DiaryCreatePage />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
