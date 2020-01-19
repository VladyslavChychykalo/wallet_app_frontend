export const getFinanceData = store => store.finance.data;

export const getFinanceTotalBalance = store => store.finance.totalBalance;

export const getFinanceTotalTypeBalance = store =>
  store.finance.typeTotalBalance;

// export const getUserId = store => store.session.user.id;
export const getUserId = store => {
  if (store.session.user === null) {
    return '';
  }
  return store.session.user.id;
};

export const getBalance = store => store.finance.totalBalance;
