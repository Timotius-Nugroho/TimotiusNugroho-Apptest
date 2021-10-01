import React from 'react';
import {render} from '@testing-library/react-native';
import AllContact from '../AllContact';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const navigationMock = {navigate: jest.fn()};
const mockStore = configureStore();
const contactInfoMock = {
  firstName: 'firstName',
  lastName: 'lastName',
  photo: 'www.test.com',
  id: '000-000',
};
const initialState = {
  contact: {
    allContact: [contactInfoMock],
    selectedContact: {},
  },
};

afterEach(() => {
  jest.clearAllMocks();
});

test('should render contact list', () => {
  const {debug, queryByText} = render(
    <Provider store={mockStore(initialState)}>
      <AllContact navigation={navigationMock} />
    </Provider>,
  );

  const name = queryByText(
    `${contactInfoMock.firstName} ${contactInfoMock.lastName}`,
  );
  expect(name).not.toBeNull();

  // debug();
});

test('should not render contact list', () => {
  const initialState = {
    contact: {
      allContact: [],
      selectedContact: {},
    },
  };
  const {debug, queryByText} = render(
    <Provider store={mockStore(initialState)}>
      <AllContact navigation={navigationMock} />
    </Provider>,
  );

  const loadingText = queryByText(/Loading.../i);
  expect(loadingText).not.toBeNull();

  // debug();
});
