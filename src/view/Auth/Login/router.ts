import { IRouter } from '../../../routers/interface';
import AuthLayout from '../component/AuthLayout';

export const routerLogin: IRouter = {
  path: '/login',
  loader: import('./index'),
  isPrivate: false,
  layoutComponent: AuthLayout,
};
