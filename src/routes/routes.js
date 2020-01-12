import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import DashboardPageContainer from '../pages/DashboardPage/DashboardPageContainer';

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
    component: DashboardPageContainer,
  },
};
