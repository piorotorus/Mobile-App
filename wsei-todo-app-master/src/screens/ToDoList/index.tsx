import React, { FC,useState } from 'react';
import { Text, View, Button,TextInput } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddItemPage from '../AddItemPage';
import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
text-align: center;
margin-top:25px;
    font-size: 20px;
    color: ${Colors.black};
`;

const ScrollContainer = styled.ScrollView`
flex:1;
width:100%;
background-color: ${Colors.lightblue};
`;

const AddItemView=styled.View`
margin-top:28px;
`

const TitleInputStyle=styled.TextInput`
borderColor:${Colors.black};
backgroundColor:${Colors.grey};
margin-left:40px;
margin-right:40px;

borderWidth:1;
`
const TextInputStyle=styled.TextInput`
borderColor:${Colors.black};
backgroundColor:${Colors.grey};
margin-left:40px;
margin-right:40px;
borderWidth:1;
`


const TodoListView=styled.View`
margin-top:28px;
`


interface IWelcomeProps {
    myProps: string;
}

interface ToDoListProps{}

const ToDoList:FC<ToDoListProps>=(props)=>{
    const navigation=useNavigation();
    const [showForm,setShowForm]=useState<boolean>(false);
    return(<ScrollContainer>

{showForm?(<TODOLIST changeView={setShowForm} /> ):(<Form changeView={setShowForm} />)}

    </ScrollContainer>);
};

const TODOLIST:FC<{changeView(changeView:boolean)}>=(props)=>{
    const navigation=useNavigation();
    const changeViewHandler=()=>{
        props.changeView(false);
    }
    return(
        <TodoListView>
            
             <Button title="Submit" color="#841584"  onPress={changeViewHandler} />
            <WelcomeText>Tytuł:</WelcomeText>
            <TitleInputStyle></TitleInputStyle>
            
           
            <WelcomeText>Opis:</WelcomeText>
            <TextInputStyle></TextInputStyle>

        </TodoListView>
    );
};

const Form:FC<{changeView(changeView:boolean)}>=(props)=>{
    const navigation=useNavigation();
    const changeViewHandler=()=>{
        props.changeView(true);
    }
    return(
        <AddItemView>
<Button title="Add item" color="#841584" onPress={changeViewHandler} />
<WelcomeText>Lista rzeczy do zrobienia:</WelcomeText>
        </AddItemView>
        
    );
};

export default ToDoList;