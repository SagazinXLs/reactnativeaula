import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { Button, View, Text} from 'react-native'



export default function ExTelasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button
        title="Próxima Página"
        onPress={() => navigation.navigate('ExTelasScreen2')}
      />
    </View>
  );
}

