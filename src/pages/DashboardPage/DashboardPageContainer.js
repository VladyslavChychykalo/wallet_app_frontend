import { connect } from 'react-redux';
import { openModalAddTransaction } from '../../redux/global/globalActions';
import DashboardPage from './DashboardPage';
import getIsModalAddTransactionOpen from '../../redux/global/globalSelectors';
// import * as financeOperations from '../../redux/finance/financeOperations';

const mapStateToProps = state => ({
  isModalAddTransactionOpen: getIsModalAddTransactionOpen(state),
});

const mapDispatchToProps = {
  openModalAddTransaction,
  // fetchTransactions: financeOperations.fetchTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
