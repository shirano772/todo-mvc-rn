import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTodo } from './src/app/components/AddTodo';
import { TodoList } from './src/app/components/TodoList';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { EditTodo } from './src/app/components/EditTodo';

const Tab = createBottomTabNavigator();

const AddTodoIcon: React.FC<{size: number, color: string}> = ({color, size}) =>
(<AntDesign name="pluscircle" size={size} color={color} />)

const TodoListIcon: React.FC<{size: number, color: string}> = ({color, size}) =>
(<AntDesign name="infocirlce" size={size} color={color} />)

const AddTodoStack = createStackNavigator();
const TodoListStack = createStackNavigator();

const AddTodoStackComponent = () => {
  return (
    <AddTodoStack.Navigator>
      <AddTodoStack.Screen name="タスク作成" component={AddTodo} />
    </AddTodoStack.Navigator>
  );
}

const TodoListStackComponent = () => {
  return (
    <TodoListStack.Navigator>
      <TodoListStack.Screen name="タスク一覧" component={TodoList} />
      <TodoListStack.Screen name="タスク編集" component={EditTodo} />
    </TodoListStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="タスク作成"
        component={AddTodoStackComponent}
        options={{tabBarIcon: AddTodoIcon}}
        />
        <Tab.Screen
        name="タスク一覧"
        component={TodoListStackComponent}
        options={{tabBarIcon: TodoListIcon}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
