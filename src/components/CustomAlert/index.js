import {Alert} from 'react-native';

export const createButtonAlert = (title, msg) =>
  Alert.alert(title, msg, [{text: 'OK', onPress: () => null}]);
