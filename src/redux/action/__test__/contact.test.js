import axios from 'axios';
import {
  baseUrl,
  postContactData,
  updateContactData,
  deleteContactData,
} from '../contact';

jest.mock('axios');
const idMock = '000-000';

afterEach(() => {
  jest.clearAllMocks();
});

test('should post contact', async () => {
  const setDataMock = {
    firstName: 'user',
    lastName: 'name',
    age: 22,
    photo: 'www.example.com',
  };
  const responseMock = {
    status: 200,
    message: 'succes add data',
  };
  axios.post.mockResolvedValueOnce(responseMock);
  const result = await postContactData(setDataMock);

  expect(axios.post).toHaveBeenCalledWith(`${baseUrl}/contact`, setDataMock);
  expect(result).toEqual(responseMock);
});

test('should update contact', async () => {
  const setDataMock = {
    firstName: 'user',
    lastName: 'name',
    age: 22,
    photo: 'www.example.com',
  };
  const responseMock = {
    status: 200,
    message: 'succes update data',
    data: setDataMock,
  };
  axios.put.mockResolvedValueOnce(responseMock);
  const result = await updateContactData(idMock, setDataMock);

  expect(axios.put).toHaveBeenCalledWith(
    `${baseUrl}/contact/${idMock}`,
    setDataMock,
  );
  expect(result).toEqual(responseMock);
});

test('should delete contact', async () => {
  const responseMock = {
    status: 200,
    message: 'succes delete data',
  };
  axios.delete.mockResolvedValueOnce(responseMock);
  const result = await deleteContactData(idMock);

  expect(axios.delete).toHaveBeenCalledWith(`${baseUrl}/contact/${idMock}`);
  expect(result).toEqual(responseMock);
});
