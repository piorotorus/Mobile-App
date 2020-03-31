import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`

    font-size: 16px;
    color: ${Colors.black};
`;

const DownWelcomeText = styled.Text`
margin-left:210px;
margin-right:10px;
    font-size: 16px;
    color: ${Colors.black};
`;

const ScrollContainer = styled.ScrollView`
flex:1;
width:100%;
background-color: ${Colors.lightblue};
`;

const TopLeftImage = styled.Image`
width:45%;
resizeMode:contain;
height:200px;
margin-right: auto;
margin-left: auto;
`;

const DownLeftImage = styled.Image`
width:200px;
resizeMode:contain;
height:200px;
`;

const TopRightImage = styled.Image`
width:45%;
resizeMode:contain;
height:200px;
margin-left: auto;
margin-right: auto;
`;

const TopImageContainer = styled.View`
display:flex;
flex-direction: row;

`;

const DownImageTextContainer = styled.View`
margin-top:20px;
width:100%;
flex:1;
flex-direction: row;
`;

const DownImageColumn = styled.View`
flex:1;
margin-left:5px;
`;

const MidImage = styled.Image`
width:92%;
resizeMode:contain;
height:200px;
margin-top:20px;
margin-left: auto;
margin-right: auto;
`;

interface IWelcomeProps {
    myProps: string;
}

const AddWindow: FC<IWelcomeProps> = props => {

    return (

        <ScrollContainer>
            <TopImageContainer>
                <TopLeftImage source={require('../../assets/image1.jpg')} />
                <TopRightImage source={require('../../assets/image2.jpg')} />
            </TopImageContainer>
            <WelcomeText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.{props.myProps}</WelcomeText>
            <MidImage source={require('../../assets/other1.jpg')} />
            <DownImageTextContainer>
                <DownImageColumn>
                    <DownLeftImage source={require('../../assets/image3.jpg')} />
                    <DownLeftImage source={require('../../assets/image4.jpg')} />
                    <DownLeftImage source={require('../../assets/image5.jpg')} />
                    <DownLeftImage source={require('../../assets/image6.jpg')} />
                    <DownLeftImage source={require('../../assets/image7.jpg')} />
                    <DownLeftImage source={require('../../assets/image8.jpg')} />

                </DownImageColumn>


                <DownWelcomeText> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem.Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Lorem ipsum dolor sit amet.{props.myProps}</DownWelcomeText>
            </DownImageTextContainer>


        </ScrollContainer>

    );
};

export default AddWindow;