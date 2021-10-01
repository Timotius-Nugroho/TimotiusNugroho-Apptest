import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, View, Image, ScrollView, Alert} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import ButtonSubmit from '../../components/ButtonSubmit';
import PpDummy from '../../assets/image/ppdummy.png';
import {
  getContact,
  getAllContact,
  updateContactData,
  deleteContactData,
} from '../../redux/action/contact';

const DetailContact = ({route, navigation}) => {
  const {id} = route.params;
  const {selectedContact} = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(false);
  const [isErrorLoad, setIsErrorLoad] = useState(false);
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
  });

  const createButtonAlert = (title, msg) =>
    Alert.alert(title, msg, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const changeText = (label, value) => {
    const newValue =
      label === 'age' ? (parseInt(value) ? parseInt(value) : 0) : value;
    setContact({
      ...contact,
      [label]: newValue,
    });
  };

  const updateContact = () => {
    updateContactData(id, contact)
      .then(res => {
        createButtonAlert('Done', res.data.message);
      })
      .catch(err => {
        createButtonAlert('Failed', err.response.data.message);
      })
      .finally(() => {
        setIsUpdate(false);
        dispatch(getContact(id));
        dispatch(getAllContact());
      });
  };

  const cancelUpdateContact = () => {
    setIsUpdate(false);
    setContact(selectedContact);
  };

  const deleteContact = () => {
    deleteContactData(id)
      .then(res => {
        createButtonAlert('Done', res.data.message);
        dispatch(getAllContact());
      })
      .catch(err => {
        createButtonAlert('Failed', err.response.data.message);
      })
      .finally(() => {
        navigation.navigate('MainApp');
      });
  };

  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  useEffect(() => {
    if (selectedContact.id) {
      delete selectedContact.id;
    }

    setContact({
      ...contact,
      ...selectedContact,
    });
  }, [selectedContact]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {contact.photo ? (
          <Image
            source={isErrorLoad ? PpDummy : {uri: contact.photo}}
            onError={() => setIsErrorLoad(true)}
            style={styles.profile}
          />
        ) : null}
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
