import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen({ route }) {
  const { username } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Xin chào, {username}!</Text>
    </View>
  );
}
