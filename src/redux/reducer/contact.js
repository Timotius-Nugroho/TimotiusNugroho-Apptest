const initialState = {
  allContact: [],
  selectedContact: {},
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACT_PENDING':
      return state;
    case 'GET_ALL_CONTACT_FULFILLED':
      return {
        ...state,
        allContact: action.payload.data.data,
      };
    case 'GET_ALL_CONTACT_REJECTED':
      return state;
    case 'GET_CONTACT_PENDING':
      return state;
    case 'GET_CONTACT_FULFILLED':
      return {
        ...state,
        selectedContact: action.payload.data.data,
      };
    case 'GET_CONTACT_REJECTED':
      return state;
    default:
      return state;
  }
};

export default contact;
