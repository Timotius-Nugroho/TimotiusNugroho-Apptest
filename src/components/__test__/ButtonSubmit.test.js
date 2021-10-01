import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButttonSubmit from '../ButtonSubmit';

test('should render without crashing', () => {
  const handleSubmitMock = jest.fn();
  const typeMock = 'Add';

  const {debug, getByText} = render(
    <ButttonSubmit type={typeMock} handleSubmit={handleSubmitMock} />,
  );
  const button = getByText(/Add/i);

  fireEvent.press(button);
  expect(handleSubmitMock).toHaveBeenCalledTimes(1);
});
