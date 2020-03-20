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

const AddWindow: FC<IWelcomeProps> = props => {
    return (
        <View>
            <WelcomeText>Add window {props.myProps}</WelcomeText>
        </View>
    );
};

export default AddWindow;