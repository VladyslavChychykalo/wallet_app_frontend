import { connect } from 'react-redux';
import { openModalAddTransaction } from '../../redux/global/globalActions';
import DashboardPage from './DashboardPage';
import getIsModalAddTransactionOpen from '../../redux/global/globalSelectors';

const mapStateToProps = state => ({
  isModalAddTransactionOpen: getIsModalAddTransactionOpen(state),
});

const mapDispatchToProps = {
  openModalAddTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
