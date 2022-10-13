import React from 'react';
import { Routes } from 'react-router-dom';
import ShowRouter from './ShowRouter';
import { publicRouter } from '../index';

const PublicPage: React.FC = () => {
  return <Routes>{ShowRouter({ routers: publicRouter })}</Routes>;
};

export default PublicPage;
