import * as React from 'react';
import { Text, View } from 'react-native';

export const TodoList: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TODO一覧画面</Text>
    </View>
  );
}