import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { productId } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Chi tiết sản phẩm ID: {productId}</Text>
    </View>
  );
}
