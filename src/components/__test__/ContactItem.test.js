import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ContactItem from '../ContactItem';

test('should render without crashing', () => {
  const goToDetailMock = jest.fn();
  const nameMock = 'User_1';
  const imageUrlMock = 'www.image.com/--';

  const {debug, getByText} = render(
    <ContactItem
      name={nameMock}
      imageUrl={imageUrlMock}
      goToDetail={goToDetailMock}
    />,
  );

  const nameItem = getByText(/User_1/i);
  expect(nameItem).not.toBeNull();
  fireEvent.press(nameItem);
  expect(goToDetailMock).toHaveBeenCalled();
  // debug();
});
