import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultTemplate from '@styles/DefaultTemplate';
import ScrollToTop from '@utils/ScrollToTop';
import { AuthRoute, PreventedRoute } from '@router';
import {
  LandingPage,
  LoginPage,
  MainPage,
  OAuthRedirect,
  DiaryPage,
  DiaryCreatePage,
} from '@pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DefaultTemplate>
        <Routes>
          {/* PreventedRoute - Token이 존재 할 시 자동 메인(앨범 선택)으로 이동 */}
          <Route element={<PreventedRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/redirect" element={<OAuthRedirect />} />
            <Route path="/tutorial" element={<LandingPage />} />
          </Route>
          {/* AuthRoute - Token이 존재해야 접속 가능함. */}
          <Route element={<AuthRoute />}>
            {/* <Route path="/album" element={<AlbumListPage />}> */}
            {/* <Route path="new" element={<AlbumCreatePage />} /> */}
            {/* <Route path="profile" element={<ProfilePage />} /> */}
            {/* </Route> */}
            {/* <Route path="/album/:albumId" element={<AlbumMainPage />}> */}
            {/* <Route path="diary"> */}
            {/* <Route path=":diaryId" element={<DiaryPage />} /> */}
            {/* <Route path="new" element={<DiaryCreatePage />} /> */}
            {/* </Route> */}
            {/* <Route path="members" element={<MemberListPage />}> */}
            {/* <Route path="invite" element={<MemberInvitePage />} /> */}
            {/* </Route> */}
            {/* <Route path="settings" element={<AlbumSettingsPage />}> */}
            {/* <Route path="edit" element={<AlbumSettingsEditPage />} /> */}
            {/* </Route> */}
            {/* <Route path="storybook" element={<StorybookPage />} /> */}
            {/* <Route path="moment" element={<SpecialMomentPage />} /> */}
            {/* </Route> */}
          </Route>
          {/* 임시 404 페이지 */}
          <Route path="*" element={<div>404 Page</div>} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default Router;
