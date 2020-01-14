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

export const getFinaceDataFetch = () => dispatch => {
  dispatch(finaceDataFetchStart());
};

export const getFinaceTotalBalanceFetch = () => dispatch => {
  dispatch(finaceTotalBalanceFetchStart());
};

export const getFinaceTotalTypeBalanceFetch = () => dispatch => {
  dispatch(finaceTotalTypeBalanceFetchStart());
};
