import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAddContact from '../../assets/icon/addcontact.svg';
import IconAllContact from '../../assets/icon/allcontact.svg';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    if (label === 'AllContact') {
      return isFocused ? <IconAllContact /> : <IconAllContact />;
    }
    if (label === 'AddContact') {
      return isFocused ? <IconAddContact /> : <IconAddContact />;
    }

    return <IconAddContact />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <View>
        <Icon />
      </View>
      <View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: -8,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
