import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

interface IWelcomeProps {
    myProps: string;
}

const ToDoList: FC<IWelcomeProps> = props => {
    return (
        <View>
            <WelcomeText>To do List {props.myProps}</WelcomeText>
        </View>
    );
};

export default ToDoList;