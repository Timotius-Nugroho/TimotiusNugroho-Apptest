import React from 'react';
import {render} from '@testing-library/react-native';
import DetailContact from '../DetailContact';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const routeMock = {params: {id: 1}};
const navigationMock = {navigate: jest.fn()};
const contactInfoMock = {
  firstName: 'firstName',
  lastName: 'lastName',
  photo: 'www.test.com',
  id: '000-000',
};

test('should render without crashing', () => {
  const mockStore = configureStore();
  const initialState = {
    contact: {
      allContact: [],
      selectedContact: contactInfoMock,
    },
  };

  const {debug, getByTestId} = render(
    <Provider store={mockStore(initialState)}>
      <DetailContact navigation={navigationMock} route={routeMock} />
    </Provider>,
  );

  const imgPofile = getByTestId('image-detail');
  expect(imgPofile.props.source.uri).toBe(contactInfoMock.photo);
  // debug();
});
