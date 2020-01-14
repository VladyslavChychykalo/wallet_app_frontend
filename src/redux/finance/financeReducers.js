import types from '../types';

const initState = {
  data: null,
  totalBalance: null,
  typeTotalBalance: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case types.FINANCE_REQUEST:
      return state;

    case types.FINANCE_SUCCESS:
      return payload;

    case types.FINANCE_ERROR:
      return payload;

    default:
      return state;
  }
};
