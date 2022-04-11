import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootStack from './RootStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const sideMenuDisabledScreens = ['Login'];
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      options={{
        headerShown: false,
      }}
      edgeWidth={40}>
      <Drawer.Screen
        name="RootStack"
        component={RootStack}
        options={({route}) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Login';
          if (sideMenuDisabledScreens.includes(routeName)) {
            return {swipeEnabled: false};
          }
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
