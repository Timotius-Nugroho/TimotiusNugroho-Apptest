import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ContactItem = ({name, imageUrl, goToDetail}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={goToDetail}>
      <View style={styles.imgContainer}>
        <Image style={styles.profile} source={{uri: imageUrl}} />
      </View>
      <View>
        <Text style={styles.contactName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.05,
    elevation: 6,
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  imgContainer: {
    borderWidth: 2,
    borderColor: '#87d5ff',
    borderRadius: 10,
    padding: 5,
  },

  contactName: {
    fontWeight: '600',
    marginLeft: 20,
    fontSize: 20,
  },
});
