import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const CustomTextInput = ({label, value, placeholder, handleChange, isEdit}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 5}}>{label}</Text>
      <TextInput
        style={styles.input(isEdit)}
        value={value}
        placeholder={placeholder}
        editable={isEdit}
        onChangeText={text => {
          handleChange(label, text);
        }}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: isEdit => ({
    height: 50,
    width: '100%',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: isEdit ? '#8f9596' : 'white',
    padding: 10,
    marginBottom: 20,
  }),
});
