import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
margin: 5px 20px;
    font-size: 16px;
    color: ${Colors.black};
`;

const TopImageContainer = styled.View`
display:flex;
flex-direction: row;
margin-bottom:15px;

`;

const NameText = styled.Text`
margin-left:10px;
font-weight: bold;
margin-top:75px;
font-size: 20px;
    color: ${Colors.black};
`;

const ScrollContainer = styled.ScrollView`
flex:1;
width:100%;
background-color: ${Colors.lightblue};
`;

const MidImage = styled.Image`
resizeMode:contain;
width:92%;
height:200px;
margin-left: auto;
margin-right: auto;
`;

const CustomImage = styled.Image`
width:50px;
height:50px;
margin-top: 60px;
margin-left: 30px;

border-radius: 100px;
`;

interface IWelcomeProps {
    myProps: string;
}

const Home: FC<IWelcomeProps> = props => {

    return (

        <ScrollContainer>
            <TopImageContainer>
            <CustomImage source={require('../../assets/profile.jpg')} />
            <NameText> Jan Kowalski, Kraków</NameText>
            </TopImageContainer>
            <WelcomeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.{props.myProps}</WelcomeText>
            <MidImage source={require('../../assets/midImage.jpg')} />
            <WelcomeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. {props.myProps}</WelcomeText>
        </ScrollContainer>

    );
};

export default Home;