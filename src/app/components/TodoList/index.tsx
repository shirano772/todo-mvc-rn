import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { useCallback } from 'react';
import { Dimensions, SectionList, Text, TouchableHighlight, View} from "react-native";
import styled from 'styled-components';

const dummydata = [
  {
    title: 'TODO一覧',
    data: [
      {
      id: '1',
      title: "title1",
      status: 'todo'
      },
      {
        id: '2',
        title: "title2",
        status: 'todo'
      },
    ]
  },
  {
    title: 'DOING一覧',
    data: [
      {
      id: '3',
      title: "title3",
      status: 'doing'
      },
      {
        id: '4',
        title: "title4",
        status: 'doing'
      },
    ]
  },
  {
    title: 'DONE一覧',
    data: [
      {
      id: '5',
      title: "title5",
      status: 'done'
      },
      {
        id: '6',
        title: "title6",
        status: 'done'
      },
    ]
  },
]

type Task = {
  id: string,
    title: string,
    status: 'todo' | 'doing' | 'done'
}

type Sections = {
  title: string,
  data: Array<Task>
}[]

export const TodoList: React.FC = () => {
  const nav = useNavigation()
  const [data, setData] = React.useState<null | Sections>(null)

  useFocusEffect(
    useCallback( () => {
      axios.get<Task[]>('http://localhost:3000/todo')
      .then(res => {
        const processedData: Sections = [
          {
            title: 'todo',
            data: []
          },
          {
            title: 'doing',
            data: []
          },
          {
            title: 'done',
            data: []
          }
        ]
        for (const task of res.data) {
          if (task.status === 'todo') {
            processedData[0].data.push(task)
          }
          if (task.status === 'doing') {
            processedData[1].data.push(task)
          }
          if (task.status === 'done') {
            processedData[2].data.push(task)
          }
        }
        setData(processedData)
      })
    }, [])
  )

  if (!data) {
    return null
  }

  return (
    <Section>
      <SectionList
      sections={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <ItemWrapper onPress={() => nav.navigate('タスク編集', {id: item.id})} underlayColor={'gray'}>
          <ItemText>{item.title}</ItemText>
        </ItemWrapper>
      )}
      renderSectionHeader={({section}) => (
      <SectionHeaderWrapper>
        <SectionHeaderText>{section.title}</SectionHeaderText>
      </SectionHeaderWrapper>
      )}
      />
    </Section>
  )
}

const Section = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${Dimensions.get('window').height}px;
`

const SectionHeaderWrapper = styled(View)`
background: #eee;
width: ${Dimensions.get('window').width}px;
margin-left: 10px;
border-top-color: #000;
border-top-width: 1px;
border-bottom-color: #000;
border-bottom-width: 1px;
`

const SectionHeaderText = styled(Text)`
font-weight: bold;
`

const ItemWrapper = styled(TouchableHighlight)`
background: #fff;
height: 40px;
justify-content: center;
border-top-color: #000;
border-top-width: 1px;
border-bottom-color: #000;
border-bottom-width: 1px;
padding: 1px;
`

const ItemText = styled(Text)`
margin-left: 10px;
`
