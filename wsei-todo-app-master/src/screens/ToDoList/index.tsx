import React, { FC, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constans/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { ITodoListReducer } from '../../reducers/todoListReducer';
import { ISingleElementList } from '../../entities/todoSingleEl';
import { useDispatch } from 'react-redux';
import { makeNewElem } from '../../actions/todoListActions';
import { removeElemTodoList } from '../../actions/todoListActions';

type removeNewElem = ReturnType<typeof removeElemTodoList>;
type makeNewElem = ReturnType<typeof makeNewElem>;

interface IWelcomeProps {
    myProps: string;
}
interface ToDoListProps { }

const WelcomeText = styled.Text`
text-align: center;
margin-top:25px;
    font-size: 20px;
    color: ${Colors.black};
`
const ScrollContainer = styled.ScrollView`
flex:1;
width:100%;
background-color: ${Colors.lightblue};
`
const AddItemView = styled.View`
border:1px solid black
`
const TitleInputStyle = styled.TextInput`
borderColor:${Colors.black};
backgroundColor:${Colors.grey};
margin-left:40px;
margin-right:40px;
borderWidth:1;
`
const TextInputStyle = styled.TextInput`
borderColor:${Colors.black};
backgroundColor:${Colors.grey};
margin-left:40px;
margin-right:40px;
borderWidth:1;
`
const Wrapper = styled.View`
margin:80px 20px 0 20px;
`
const TodoListView = styled.View`
border:1px solid black
margin:0 0 20px 0;
`

const ToDoList: FC<ToDoListProps> = (props) => {
    const navigation = useNavigation();
    const [showForm, setShowForm] = useState<boolean>(false);
    return (<ScrollContainer>
        {showForm ? (<TODOLIST changeView={setShowForm} />) : (<Form changeView={setShowForm} />)}
    </ScrollContainer>);
};

const TODOLIST: FC<{ changeView(changeView: boolean) }> = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescrInput] = useState<string>('');
    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    const descriptionValueChange = (txt) => {
        setDescrInput(txt.nativeEvent.text);
    }
    const changeViewHandler = () => {
        props.changeView(false);
    }
    const saveDate = () => {
        dispatch<makeNewElem>(makeNewElem({
            name: nameInput,
            description: descInput,
            id: new Date().getTime()
        } as ISingleElementList
        ));
        props.changeView(false);
    }
    return (
        <Wrapper>
            <TodoListView>
                <WelcomeText>Tytuł:</WelcomeText>
                <TitleInputStyle value={nameInput} onChange={nameValueChange} placeholder="Name"></TitleInputStyle>
                <WelcomeText>Opis:</WelcomeText>
                <TextInputStyle value={descInput} onChange={descriptionValueChange} placeholder="Description"></TextInputStyle>
            </TodoListView>
            <Button title="Submit" color="#841584" onPress={saveDate} />
        </Wrapper>
    );
};

const Form: FC<{ changeView(changeView: boolean) }> = (props) => {
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const changeViewHandler = () => {
        props.changeView(true);
    }
    const removeElement = (id: number) => {
        dispatch<removeNewElem>(removeElemTodoList(id));
    }
    return (
        <Wrapper>
            <AddItemView>
                <Button title="Add item" color="#841584" onPress={changeViewHandler} />
                <WelcomeText>Lista rzeczy do zrobienia:</WelcomeText>
            </AddItemView>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <TodoListView key={index}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                    <Button onPress={() => removeElement(elem.id)} title="Usuń" />
                </TodoListView>
            )}
        </Wrapper>
    )
};

export default ToDoList;