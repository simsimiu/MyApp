import React from 'react';
import { View, Text } from 'react-native';

export default function MainScreen({ route }) {
  const { username, password } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Chào mừng: {username}</Text>
      <Text>Mật khẩu: {password}</Text>
    </View>
  );
}
