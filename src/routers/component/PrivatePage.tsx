import React, { useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { privateRouter } from '..';
import CONFIG from '../../config';
import ShowRouter from './ShowRouter';

const PrivatePage: React.FC = () => {
  let token: any = null;

  useEffect(() => {
    if (token) {
      // Get profile current user
    } else {
      window.location.href = CONFIG.LOGIN_PAGE;
    }
  }, [token]);

  return <Routes>{ShowRouter({ routers: privateRouter })}</Routes>;
};

export default PrivatePage;
