import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWindow from '../AddWindow';
import Home from '../Home';
import ToDoList from '../ToDoList';


const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;


interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (
        <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddWindow" component={AddWindow} />
      <Tab.Screen name="ToDoList" component={ToDoList} />
      <Tab.Screen name="Welcome" component={Welcome} />
    </Tab.Navigator>
  );
}

export default Welcome;