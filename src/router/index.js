import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonNavigator from '../components/ButtonNavigator';
import AddContact from '../pages/AddContact';
import AllContact from '../pages/AllContact';
import DetailContact from '../pages/DetailContact';
import Splash from '../pages/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonNavigator {...props} />}>
      <Tab.Screen name="AllContact" component={AllContact} />
      <Tab.Screen name="AddContact" component={AddContact} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Spash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        initialParams={{id: null}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
