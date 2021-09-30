import axios from 'axios';

export const getAllContact = () => {
  return {
    type: 'GET_ALL_CONTACT',
    payload: axios.get('https://simple-contact-crud.herokuapp.com/contact'),
  };
};
