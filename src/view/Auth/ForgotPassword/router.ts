import { IRouter } from '../../../routers/interface';
import AuthLayout from '../component/AuthLayout';

export const routerForgotPassword: IRouter = {
  path: '/login/forgot-password',
  loader: import('./index'),
  isPrivate: false,
  layoutComponent: AuthLayout,
};
