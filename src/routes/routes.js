import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

export default {
  LOGIN_PAGE: {
    path: '/login',
    component: LoginPage,
  },
  REGISTER_PAGE: {
    path: '/register',
    component: RegistrationPage,
  },
  DASHBOARD_PAGE: {
    path: '/',
    component: DashboardPage,
  },
};
