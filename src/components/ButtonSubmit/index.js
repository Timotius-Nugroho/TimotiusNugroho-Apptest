import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonSubmit = ({handleSubmit, type}) => {
  return (
    <TouchableOpacity style={styles.submitButton(type)} onPress={handleSubmit}>
      <Text>{`${type} !`}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  submitButton: type => ({
    backgroundColor:
      type === 'Add' || type === 'Update' || type === 'Save'
        ? '#5ac2db'
        : '#C94040',
    marginTop: 10,
    borderRadius: 10,
    borderColor:
      type === 'Add' || type === 'Update' || type === 'Save'
        ? '#2faacd'
        : '#Ce0d00',
    borderWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }),
});
