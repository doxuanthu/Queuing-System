import { IRouter } from '../../routers/interface';

export const routerHomepage: IRouter = {
  path: '/',
  loader: import('./index'),
};
