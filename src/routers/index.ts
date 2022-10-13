import LoadableRouter from './loadableRouter';
import { privatePage, publicPage } from './mainRouter';

export const privateRouter = new LoadableRouter({
  routers: privatePage,
}).routers;

export const publicRouter = new LoadableRouter({
  routers: publicPage,
}).routers;
