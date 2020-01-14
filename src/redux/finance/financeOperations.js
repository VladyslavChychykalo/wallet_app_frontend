import {
  finaceDataFetchStart,
  // finaceDataFetchFinish,
  // finaceDataFetchError,
  finaceTotalBalanceFetchStart,
  // finaceTotalBalanceFinish,
  // finaceTotalBalanceFetchError,
  finaceTotalTypeBalanceFetchStart,
  // finaceTypeTotalBalanceFinish,
  // finaceTypeTotalBalanceFetchError
} from './financeActions';

export const getFinaceData = () => dispatch => {
  dispatch(finaceDataFetchStart());
};

export const finaceTotalBalance = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
};

export const finaceTotalTypeBalance = () => dispatch => {
  dispatch(finaceTotalTypeBalanceFetchStart());
};
