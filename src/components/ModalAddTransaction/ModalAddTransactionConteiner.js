import { connect } from 'react-redux';
import { closeModalAddTransaction } from '../../redux/global/globalActions';
import ModalAddTransaction from './ModalAddTransaction';

const mapDispatchToProps = {
  closeModalAddTransaction,
};

export default connect(null, mapDispatchToProps)(ModalAddTransaction);
