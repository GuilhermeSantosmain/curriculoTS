import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

function Login({navigation}: Props) {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
