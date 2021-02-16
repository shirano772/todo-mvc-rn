import * as React from 'react';
import { useState } from 'react';
import { Dimensions, Text, TextInput, TouchableHighlight, View } from 'react-native';
import styled from 'styled-components';

type Props = {
  todoTitle: string
  onChangeText: (txt:string) => unknown
}

export const AddTodo = () => {
  const [todoTitle, onChangeText] = useState('')
  console.log(todoTitle)
  return (
    <AddTodoPresentation
      todoTitle={todoTitle}
      onChangeText={onChangeText}
    />
  )
}

const AddTodoPresentation: React.FC<Props> = ({
  todoTitle,
  onChangeText: onChangeText
}) => {
  return (
    <Section>
      <Form>
        <Header>タスク名を入力</Header>
        <Input
        value={todoTitle}
        onChangeText={onChangeText}
        />
        <SubmitSection>
          <Submit>
            <Text>追加する</Text>
          </Submit>
        </SubmitSection>
      </Form>
    </Section>
  );
};

const Section = styled(View)`
flex: 1;
justify-content: center;
align-items: center;
`

const Input = styled(TextInput)`
margin-top: 60px;
height:40px;
margin-left:20px;
margin-right:20px;
border: 1px;
`

const Header = styled(Text)`
font-weight: bold;
`

const Form = styled(View)`
margin-top:80px;
width: ${Dimensions.get("window").width -60}px;
`
const SubmitSection = styled(View)`
flex-direction: row;
justify-content: flex-end;
`

const Submit = styled(TouchableHighlight)`
background: #f00;
justify-content: center;
width: 80px;
height: 40px;
`