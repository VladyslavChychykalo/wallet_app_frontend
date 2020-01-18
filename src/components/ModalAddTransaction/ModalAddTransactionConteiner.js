import { connect } from 'react-redux';
import { closeModalAddTransaction } from '../../redux/global/globalActions';
import { addTransaction } from '../../redux/finance/financeOperations';
import ModalAddTransaction from './ModalAddTransaction';

const mapDispatchToProps = {
  closeModalAddTransaction,
  addTransaction,
};

export default connect(null, mapDispatchToProps)(ModalAddTransaction);
