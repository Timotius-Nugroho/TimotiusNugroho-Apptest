import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, ScrollView} from 'react-native';
import ContactItem from '../../components/ContactItem';
import {getContact, getAllContact} from '../../redux/action/contact';

const AllContact = ({navigation}) => {
  const {allContact} = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const goToDetail = id => {
    dispatch(getContact(id));
    navigation.navigate('DetailContact', {id: id});
  };

  useEffect(() => {
    dispatch(getAllContact());
  }, []);

  return (
    <ScrollView style={styles.container}>
      {allContact.map((item, index) => {
        return (
          <ContactItem
            key={index}
            name={`${item.firstName} ${item.lastName}`}
            imageUrl={item.photo}
            goToDetail={goToDetail}
            id={item.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default AllContact;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ebeff0',
  },
});
