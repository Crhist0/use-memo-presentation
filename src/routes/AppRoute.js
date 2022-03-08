import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Intro from '../pages/Intro';
import SemUseMemo from '../pages/SemUseMemo';
import Git from '../pages/Git';
import End from '../pages/End';
import Start from '../pages/Start';
import UseMemo from '../pages/UseMemo';
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/semUseMemo" element={<SemUseMemo />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/*" element={<Start />} />
      <Route path="/git" element={<Git />} />
      <Route path="/end" element={<End />} />
      {/* <Route path="*" element={<Navigate replace to={"/home"} />} /> */}
    </Routes>
  );
};

export default AppRoute;
