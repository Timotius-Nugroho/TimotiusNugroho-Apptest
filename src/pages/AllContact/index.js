import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ContactItem from '../../components/ContactItem';

const AllContact = () => {
  const goToDetail = () => {
    console.log('goTo');
  };

  return (
    <ScrollView style={styles.container}>
      <ContactItem
        name="Udin Sukarjo"
        imageUrl="https://i.vimeocdn.com/portrait/58832_300x300.jpg"
        goToDetail={goToDetail}
      />
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
