import * as React from 'react';
import { Text, View } from 'react-native';

export const AddTodo: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TODO作成画面</Text>
    </View>
  );
}