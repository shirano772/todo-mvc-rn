import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTodo } from './src/app/components/AddTodo';
import { TodoList } from './src/app/components/TodoList';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AddTodoIcon: React.FC<{size: number, color: string}> = ({color, size}) =>
(<AntDesign name="pluscircle" size={size} color={color} />)

const TodoListIcon: React.FC<{size: number, color: string}> = ({color, size}) =>
(<AntDesign name="infocirlce" size={size} color={color} />)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="タスク作成"
        component={AddTodo}
        options={{tabBarIcon: AddTodoIcon}}
        />
        <Tab.Screen
        name="タスク一覧"
        component={TodoList}
        options={{tabBarIcon: TodoListIcon}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
