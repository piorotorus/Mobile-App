import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWindow from '../AddWindow';
import Home from '../Home';
import ToDoList from '../ToDoList';

import Icon from 'react-native-vectos-icons';
import {FontAwesome} from '@expo/vector-icons';

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

const MyTabs:FC=()=> {
  return (
    <Tab.Navigator initialRouteName="Home"
    tabBarOptions={{activeTintColor: '#FFCC10',
    activeBackgroundColor: '#C0C0C0',}}>
      <Tab.Screen name="Home" component={Home}  options={{
       
        tabBarIcon:({color,size})=>(
          <FontAwesome icon="home" size={12} color={color}
          />
        )
      }}/>
     <Tab.Screen name="Other" component={AddWindow} />
      <Tab.Screen name="To Do List" component={ToDoList} />
      
     
    </Tab.Navigator>
  );
}

export default Welcome;