import React from 'react';
import {render} from '@testing-library/react-native';
import AddContact from '../AddContact';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const navigationMock = {navigate: jest.fn()};

test('should render without crashing', () => {
  const mockStore = configureStore();
  const initialState = {
    contact: {
      allContact: [],
      selectedContact: {},
    },
  };
  const {debug, queryByText} = render(
    <Provider store={mockStore(initialState)}>
      <AddContact navigation={navigationMock} />
    </Provider>,
  );
  const addButton = queryByText(/Add !/i);
  expect(addButton).not.toBeNull();
  // debug();
});
