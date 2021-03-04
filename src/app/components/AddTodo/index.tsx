import axios from "axios";
import * as React from "react";
import { useState } from "react";
import {
  Dimensions,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import styled from "styled-components";

type Props = {
  created: Boolean;
  todoTitle: string;
  onChangeText: (txt: string) => unknown;
  onSubmit: () => unknown;
};

export const AddTodo = () => {
  const [todoTitle, onChangeText] = useState("");
  const [ created, setCreated ] = useState(false);

  const onSubmit = async () => {
    if (todoTitle.trim() === "") {
      return;
    }
    const payload = {
      title: todoTitle,
      status: "todo",
    };
    try {
      await axios.post("http://localhost:3000/todo", payload);
      onChangeText("");
      setCreated(true);
    } catch (err) {
      console.log(err);
      console.log("Submit実施");
    }
  };

  return (
    <AddTodoPresentation
      created={created}
      todoTitle={todoTitle}
      onChangeText={onChangeText}
      onSubmit={onSubmit}
    />
  );
};

const AddTodoPresentation: React.FC<Props> = ({
  created,
  todoTitle,
  onChangeText,
  onSubmit,
}) => {
  return (
    <Section>
      {created && (
        <Snackbar>
          <Text>タスクを作成しました</Text>
        </Snackbar>
      )}
      <Form>
        <Header>タスク名を入力</Header>
        <Input value={todoTitle} onChangeText={onChangeText} />
        <SubmitSection>
          <Submit onPress={onSubmit}>
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
`;

const Input = styled(TextInput)`
  margin-top: 60px;
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px;
`;

const Header = styled(Text)`
  font-weight: bold;
`;

const Form = styled(View)`
  margin-top: 80px;
  width: ${Dimensions.get("window").width - 60}px;
`;
const SubmitSection = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
`;

const Submit = styled(TouchableHighlight)`
  background: #f00;
  justify-content: center;
  width: 80px;
  height: 40px;
`;

const Snackbar = styled(View)`
  background: #0f0;
`;
