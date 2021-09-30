import React, {useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import ButtonSubmit from '../../components/ButtonSubmit';
import PpDummy from '../../assets/image/ppdummy.png';

const DetailContact = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [isErrorLoad, setIsErrorLoad] = useState(false);
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  });

  const changeText = (label, value) => {
    const newValue =
      label === 'age' ? (parseInt(value) ? parseInt(value) : 0) : value;
    setContact({
      ...contact,
      [label]: newValue,
    });
  };

  const updateContact = () => {
    console.log('UPDATE');
  };

  const cancelUpdateContact = () => {
    console.log('CANCEL');
    setIsUpdate(false);
  };

  const deleteContact = () => {
    console.log('DELETE');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={
            isErrorLoad
              ? PpDummy
              : {uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}
          }
          onError={() => setIsErrorLoad(true)}
          style={styles.profile}
        />
        <CustomTextInput
          label="firstName"
          value={contact.firstName}
          handleChange={changeText}
          placeholder="Input your first name"
          isEdit={isUpdate}
        />
        <CustomTextInput
          label="lastName"
          value={contact.lastName}
          handleChange={changeText}
          placeholder="Input your last name"
          isEdit={isUpdate}
        />
        <CustomTextInput
          label="age"
          value={`${contact.age}`}
          handleChange={changeText}
          placeholder="Input your age"
          isEdit={isUpdate}
        />
        <CustomTextInput
          label="photo"
          value={contact.photo}
          handleChange={changeText}
          placeholder="Input your url photo"
          isEdit={isUpdate}
        />
        {isUpdate ? (
          <ButtonSubmit handleSubmit={updateContact} type="Save" />
        ) : (
          <ButtonSubmit
            handleSubmit={() => {
              setIsUpdate(true);
            }}
            type="Update"
          />
        )}
        {isUpdate ? (
          <ButtonSubmit handleSubmit={cancelUpdateContact} type="Cancel" />
        ) : (
          <ButtonSubmit handleSubmit={deleteContact} type="Delete" />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailContact;

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
