import axios from 'axios';

const baseUrl = 'https://simple-contact-crud.herokuapp.com';

export const getAllContact = () => {
  return {
    type: 'GET_ALL_CONTACT',
    payload: axios.get(`${baseUrl}/contact`),
  };
};

export const getContact = id => {
  return {
    type: 'GET_CONTACT',
    payload: axios.get(`${baseUrl}/contact/${id}`),
  };
};

export const postContactData = async setData => {
  try {
    const res = await axios.post(`${baseUrl}/contact`, setData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const updateContactData = async (id, setData) => {
  try {
    const res = await axios.put(`${baseUrl}/contact/${id}`, setData);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteContactData = async id => {
  try {
    const res = await axios.delete(`${baseUrl}/contact/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
