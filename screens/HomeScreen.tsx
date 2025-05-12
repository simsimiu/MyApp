import React from 'react';
import { View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Profile: { username: string };
  Details: { productId: number };
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { username: 'tokyoai' })}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { productId: 123 })}
      />
    </View>
  );
}
