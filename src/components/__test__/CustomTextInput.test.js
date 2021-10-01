import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomTextInput from '../CustomTextInput';

const labelMock = 'firstName';
const valueMock = 'userName';
const placeholderMock = 'input new name here ...';
const handleChangeMock = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test('should render without crashing and editable', () => {
  const isEditMock = true;
  const {debug, getByText, getByPlaceholderText} = render(
    <CustomTextInput
      label={labelMock}
      value={valueMock}
      placeholder={placeholderMock}
      handleChange={handleChangeMock}
      isEdit={isEditMock}
    />,
  );
  const labelText = getByText(/firstName/i);
  const textInput = getByPlaceholderText(/input new name here .../i);

  expect(labelText.props.children).toBe(labelMock);
  expect(textInput.props.value).toBe(valueMock);
  expect(textInput.props.editable).toBe(true);
  fireEvent.changeText(textInput, {target: {value: 'newuserName'}});
  expect(handleChangeMock).toHaveBeenCalledTimes(1);

  // debug();
});

test('should disable field if isEditMock is false', () => {
  const isEditMock = false;
  const {debug, getByPlaceholderText} = render(
    <CustomTextInput
      label={labelMock}
      value={valueMock}
      placeholder={placeholderMock}
      handleChange={handleChangeMock}
      isEdit={isEditMock}
    />,
  );
  const textInput = getByPlaceholderText(/input new name here .../i);
  expect(textInput.props.editable).toBe(false);
});
