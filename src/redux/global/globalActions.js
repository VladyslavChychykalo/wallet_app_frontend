export const Type = {
  OPEN_MODALADDTRANSACTION: 'OPEN_MODALADDTRANSACTION',
  CLOSE_MODALADDTRANSACTION: 'CLOSE_MODALADDTRANSACTION',
};

export const openModalAddTransaction = () => ({
  type: Type.OPEN_MODALADDTRANSACTION,
});
export const closeModalAddTransaction = () => ({
  type: Type.CLOSE_MODALADDTRANSACTION,
});
