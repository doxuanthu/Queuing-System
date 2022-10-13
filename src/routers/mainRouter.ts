import { routerForgotPassword } from '../view/Auth/ForgotPassword/router';
import { routerLogin } from '../view/Auth/Login/router';
import { routerHomepage } from '../view/Homepage/router';
import { IRouter } from './interface';

export const privatePage: IRouter[] = [routerHomepage];
export const publicPage: IRouter[] = [routerLogin, routerForgotPassword];
