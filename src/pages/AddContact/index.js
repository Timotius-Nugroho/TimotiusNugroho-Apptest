import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import ButtonSubmit from '../../components/ButtonSubmit';
import PpDummy from '../../assets/image/ppdummy.png';

const AddContact = () => {
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  });

  const changeText = (label, value) => {
    const newValue =
      label === 'age' ? (parseInt(value) ? parseInt(value) : 0) : value;
    setNewContact({
      ...newContact,
      [label]: newValue,
    });
  };

  const submitNewContact = () => {
    console.log(newContact);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={PpDummy} style={styles.profile} />
        <CustomTextInput
          label="firstName"
          value={newContact.firstName}
          handleChange={changeText}
          placeholder="Input your first name"
          isEdit={true}
        />
        <CustomTextInput
          label="lastName"
          value={newContact.lastName}
          handleChange={changeText}
          placeholder="Input your last name"
          isEdit={true}
        />
        <CustomTextInput
          label="age"
          value={`${newContact.age}`}
          handleChange={changeText}
          placeholder="Input your age"
          isEdit={true}
        />
        <CustomTextInput
          label="photo"
          value={newContact.photo}
          handleChange={changeText}
          placeholder="Input your url photo"
          isEdit={true}
        />
        <ButtonSubmit handleSubmit={submitNewContact} type="Add" />
      </View>
    </ScrollView>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },

  profile: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
});
