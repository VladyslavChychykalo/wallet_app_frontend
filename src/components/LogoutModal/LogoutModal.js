import React from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import { SetIsModalLogoutClose } from '../../redux/global/globalOperations';
//import { logoutOperation } from '../../redux/authUser/operations';
import s from './LogoutModal.module.css';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(SetIsModalLogoutClose());
  //const logoutFunc = () => dispatch(logoutOperation());

  return (
    <Modal onClose={closeModal}>
      <div className={s.modalWrapper}>
        <div className={s.modalContent}>
          <p className={s.modalLogout_p}>Do you want to exit ?</p>
          <div className={s.modalLogout_btn}>
            <button
              type="button"
              className={s.yes_no_btn_header}
              onClick={() => {
               // logoutFunc();
                closeModal();
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className={s.yes_no_btn_header}
              onClick={() => closeModal()}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
