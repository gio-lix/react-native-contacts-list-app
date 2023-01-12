const contactsReducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return {}
    default:
      return state;
  }
};
export default contactsReducer;
